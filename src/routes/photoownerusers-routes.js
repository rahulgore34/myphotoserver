const express = require("express");
const router = express.Router();

const {getPhotoUsers, signupPhotoUsers, signInPhotoUsers} = require('../controllers/photousers-ctrl');
const {validateToken} = require("../middleware/validatetoken");
router.get('/', getPhotoUsers );

router.get('/testget', validateToken, (req, res) => {
  console.log('request ');
  console.log(req.user);
  res.send({
    message: 'test..Welcome '+req.user.username
  })
});

router.post('/testpost', validateToken,(req, res) => {
    res.send({
        message: 'this is test post api',
        data: req.body
    });
  });
router.post('/signup', signupPhotoUsers );
router.post('/signin', signInPhotoUsers );


module.exports = router;