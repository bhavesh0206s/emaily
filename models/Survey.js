const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./Recipients')

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
  dateSend: Date,
  lastResponded: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('surveys', surveySchema);