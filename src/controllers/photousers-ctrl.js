const PhotoOwnersUsesModel = require("../db/photoownerusers-model");
const jwt = require('jsonwebtoken');
const secretKey = 'rahulgore240489';

exports.getPhotoUsers = (req, res) => {
    res.send({
        message: 'Get Photo Users'
    })
}

exports.signupPhotoUsers = async(req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    try {
        const newUser = new PhotoOwnersUsesModel({ username, password });
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch(error) {
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}

exports.signInPhotoUsers = async(req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    try {
      const userFound = await PhotoOwnersUsesModel.findByCredentials(username, password);
    //  Generate token.
      const token = jwt.sign({username: userFound.username}, secretKey, {expiresIn: '1m'});
      res.send({
        status: 200,
        user: userFound.username,
        accessToken: token
      });
    } catch(error) { 
        const errorMessage = error.message || 'Internal server error';
        const statusCode = error.statusCode || 500;
        res.status(statusCode).json({ error: errorMessage });
    }
}

