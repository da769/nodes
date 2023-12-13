// module.exports = {
  //   mongoURI: "mongodb+srv://danielnzetu2001:Kawasaki@cluster0.jskpf6p.mongodb.net/",
  //   secretOrKey: "secret"
  // };

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const generateSecretKey = require('../utils/generateSecretKey')
// const keys = require("../config/keys");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = generateSecretKey();
// opts.secretOrKey = keys.secretOrKey;
module.exports = passport => {
  // passport.use(
    // new JwtStrategy(opts, (jwt_payload, done) => {
      passport.use('jwt', new JwtStrategy(opts, (jwt_payload, done) => { 
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    }))
  // );
};