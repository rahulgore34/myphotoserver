const mongoose = require("mongoose");

const expenseTrackerSchema = new mongoose.Schema({
   expensetitle: {
    type: String,
    required: [true, 'Expense Title is required'],
   },
   expenseamount: {
    type: Number,
    required: [true, 'Expense Amount is required'],
   },
   expensepaymentmode: {
    type: String,
    required: [true, 'Expense Payment Mode is required'],
   },
   expenseadditionalinfo: {
    type: String
   }
});

const ExpenseTrackr = mongoose.model("ExpenseTrackr", expenseTrackerSchema);
module.exports = ExpenseTrackr;