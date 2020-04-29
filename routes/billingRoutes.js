const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')

module.exports = (app)=>{
  app.post('/api/stripe', requireLogin, async (req, res) =>{
    try{
      const charge = await stripe.charges.create({
        shipping: {
          name: 'Jenny Rosen',
          address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
        },
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credit',
        source: req.body.id
      });
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user)
    }
    catch(e){
      console.log('some error');
    }
  })
}