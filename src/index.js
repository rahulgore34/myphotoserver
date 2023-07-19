const express = require("express");
var cors = require('cors');
const photoownerUsersRoute = require("./routes/photoownerusers-routes");
require("./db/db-connect");



const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/photoownerusers' , photoownerUsersRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started..');
})