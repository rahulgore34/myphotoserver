const express = require("express");
const router = express.Router();
const LoanModel = require('../db/loans-model');
const {validateToken} = require("../middleware/validatetoken");

router.get('/', (req, res, next) => {
    res.send("Expnsese")
} );
router.post('/addloaninfo', validateToken, async(req, res, next) => {
   const reqJSON = {...req.body, user: req.user.userid }
   try {
    const newLoan = new LoanModel(reqJSON);
   await newLoan.save();
   res.status(200).json({ message: 'Loan Saved successfully' });
   } catch (error) {
    const errorMessage = error.message || 'Internal server error';
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ error: errorMessage });
   }
})

router.get('/getloaninfo', validateToken, async(req, res, next) => {
    try {
     const loans = await LoanModel.find({user: req.user.userid});
    res.status(200).json({ loans});
    } catch (error) {
     const errorMessage = error.message || 'Internal server error';
     const statusCode = error.statusCode || 500;
     res.status(statusCode).json({ error: errorMessage });
    }
 })

 router.post('/deleteloaninfo', validateToken, async(req, res, next) => {
    try {
     const loansdeleted = await LoanModel.findByIdAndDelete(req.body.loanid);
    res.status(200).json({ loansdeleted});
    } catch (error) {
     const errorMessage = error.message || 'Internal server error';
     const statusCode = error.statusCode || 500;
     res.status(statusCode).json({ error: errorMessage });
    }
 })
module.exports = router;