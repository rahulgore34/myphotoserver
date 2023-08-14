const mongoose = require("mongoose");
const dbUrl = 'mongodb+srv://rahulgore34:mnHDyvgCPHStgQ8a@cluster0.bixzerg.mongodb.net/rbgphotoorg?retryWrites=true&w=majority';
mongoose.connect(dbUrl).then(() => console.log('Connected to MongoDB CLOUD'))
.catch(err => console.error('Error connecting to MongoDB:', err));