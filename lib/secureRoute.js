const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User = require('../models/user');

// this is the express function to do all the behind scene token verification, secret
function secureRoute(req, res, next) {
  // if there is no authorization header, 401
  if(!req.headers.authorization) { // if we don't have a token there then
    return res.status(401).json({ message: 'No token sent' });
  }
  const token = req.headers.authorization.replace('Bearer ', ''); // removes 'Bearer ' from the header in insomnia to leave just the token
  // function handleVerify
  function handleVerify(err, result) {
    // this is justifying the function
    if (err) {
      res.status(401).json({ message: 'Token invalid' });
    } // if all this didn't happen then setting res below. WE have the userID what can it be done with this id is below function
    //
    User
      .findById(result.sub) // looking for userID which is defined as sub
      .then(user => { // if there is no user then return
        if(!user) return res.status(401).json({ message: 'User not found' });
        req.user = user;
        return next();
      });
  }
  // this is calling the function
  jwt.verify(token, secret, handleVerify);
}

module.exports = secureRoute;
