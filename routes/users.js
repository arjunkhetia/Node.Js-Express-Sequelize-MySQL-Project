var express = require('express');
var router = express.Router();
var User = require('../models/user.model');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.render('index', { title: 'Express', data: JSON.stringify(users, null, 4) });
});

router.post('/', async function(req, res, next) {
  const name = req.body.name ? req.body.name : "";
  const status = req.body.status ? req.body.status : false;
  const user = await User.create({
    name: name,
    status: status,
    createdAt: Date.now(),
    updatedAt: null
  })
  res.send(user);
});

module.exports = router;
