const express = require("express");
var cors = require('cors');
const photoownerUsersRoute = require("./routes/photoownerusers-routes");
const expenseRoutes = require('./routes/expenses-routes');
require("./db/db-connect");



const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/photoownerusers' , photoownerUsersRoute);

app.use('/expenses' , expenseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started..');
})