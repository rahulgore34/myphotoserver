const express = require("express");
const router = express.Router();

const {getPhotoUsers, signupPhotoUsers, signInPhotoUsers} = require('../controllers/photousers-ctrl');

router.get('/', getPhotoUsers );

router.get('/testget', (req, res) => {
  res.send({
    message: 'test get api'
  })
});

router.post('/testpost', (req, res) => {
    res.send({
        message: 'this is test post api',
        data: req.body
    });
  });
router.post('/signup', signupPhotoUsers );
router.post('/signin', signInPhotoUsers );


module.exports = router;