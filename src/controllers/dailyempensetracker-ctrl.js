const ExpenseTrackr = require("../model/dailyexpensetracker-model");

// Below get all expenses
exports.getTest = async (req, res) => {
    try {
        const expenses = await ExpenseTrackr.find();
        res.status(200).json({ message: 'success', data: expenses });
    } catch (error) {
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}

//Get by ID
exports.getExpense = async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const expense = await ExpenseTrackr.findById(expenseId);
        res.status(200).json({ message: 'success', data: expense });
    } catch (error) {
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}

//  Add new Expense
exports.adddailyexpense = async (req, res) => {
    try {
        const expense = new ExpenseTrackr(req.body);
        await expense.save();
        res.status(200).json({ message: 'Expense Saved successfully', data: expense });
    } catch (error) {
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}

//  Add new Expense
exports.editdailyexpense = async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const newExpense = req.body;
        const expense = new ExpenseTrackr(req.body);
        const options = {
            new: true,         // Return the updated document
            runValidators: true // Run model validation on update
        };
        const updatedExpense = await ExpenseTrackr.findByIdAndUpdate(expenseId, newExpense, options);
        if (updatedExpense) {
            res.status(200).json({data:updatedExpense, message: "success"});
        } else {
            res.status(404).json({ message: 'Expense not found' });
        }
    } catch (error) {
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}

// Delete
exports.deletedailyexpense = async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const deletedExpense = await ExpenseTrackr.findByIdAndDelete(expenseId);
        if (deletedExpense) {
            res.status(200).json({ message: "success"});
        } else {
            res.status(404).json({ message: 'Expense not found' });
        }
    } catch (error) {
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}