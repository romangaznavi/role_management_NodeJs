var express = require('express');
const app = express();
const User = require('../model/user');
var router = express.Router();
const _ = require('lodash');
const jwt = require('jsonwebtoken');

router.post('/', async(req, res, next) => {

  try {
    const user = new User(_.pick(req.body, ['name', 'email', 'password', 'role']));
    await user.save();

    const token = jwt.sign({ _id: user._id, role: user.role}, "secreteKey");

    res.header('x-auth-header', token).send(_.pick(user, ['name', 'email', 'password']));

  } catch (error) {
    res.status(401).send("User unable to get auth token");
  }
})
module.exports = router;
 