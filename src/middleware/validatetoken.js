const jwt = require('jsonwebtoken');
const secretKey = 'rahulgore240489';


// validate token code
exports.validateToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }
  
    const t = token.split(' ')[1];
    jwt.verify(t, secretKey, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: 'Invalid token.' });
        }
        req.user = decoded;
        next();
    })
}