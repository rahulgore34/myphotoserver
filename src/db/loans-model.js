const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const loanInfoSchema = new mongoose.Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
   },
   loanno: {
    type: String,
    required: true,
   },
   loanbankname: {
    type: String,
    required: true
   },
   loanbookdate: {
    type: String,
    required: true
   },
   loanpurpose: {
    type: String,
    required: true
   },
   loanamount: {
    type: String,
    required: true
   },
   loantenure: {
    type: String,
    required: true
   },
   loanpendingtime: {
    type: String,
    required: true
   },
   loanadditionalinfo: {
    type: String
   },
   loanemi: {
    type: String,
    required: true
   },
});

const LoanInfos = mongoose.model("LoanInfo", loanInfoSchema);
module.exports = LoanInfos;