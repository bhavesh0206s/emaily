const Path = require('path-parser');
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const mongoose = require('mongoose');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys');

module.exports = (app)=>{

  app.get('/api/surveys', requireLogin,async (req, res) =>{
    const surveys = await Survey.find({_user: req.user.id})
      .select({recipients: false})
      
    res.send(surveys)
  });

  app.get('/api/surveys/:surveyId/:choice', (req, res)=>{
    res.send('Thanks for voting! Your response is valuable to us.')
  });

  app.post('/api/surveys/webhooks', (req, res)=>{
    const events = req.body.map(event => {
      const pathname =  new URL(event.url).pathname;
      const p = new Path('/api/surveys/:surveyId/:choice');
      const match = p.test(pathname);
      if(match){
        Survey.updateOne({
          _id: match.surveyId,
          recipients: {
            $elemMatch: {email: event.email, responded: false}
          }
        }, {
           $inc: { [match.choice]: 1},
           $set: { 'recipients.$.responded': true },
           lastResponded: new Date()
        }).exec()
        return {email: event.email, surveyId: match.surveyId, choice: match.choice}
      }
    })
    console.log(events)
  })

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res)=>{
    const {title, subject, body, recipients} = req.body;
    
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email =>  ({ email: email.trim() })),
      _user: req.user.id,
      dateSend: Date.now()
    });
    
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try{
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
  
      res.send(user);
    }catch(e){
      res.status(422).send(e);
    }

  });  
}

