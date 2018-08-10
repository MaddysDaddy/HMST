const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  register(request, response) {
    console.log('registering...')
    User.create(request.body)
      .then(user => {
        completeLogin(request, response, user);
      })
      .catch(error => {
        console.log(error);
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        //errors = Object.keys(errors).map(key => errors[key]);
        response.json(errors);
      });
  },
  login(request, response) {
    console.log(request.body.email);

    User.findOne({
        email: request.body.email
      })
      .then(user => {
        if (!user) throw new Error();

        console.log(request.body.password, user.password);

        return User.validatePassword(request.body.password, user.password)
          .then(() => {
            completeLogin(request, response, user);
          })
      })
      .catch(error => {
        res.status(401).json('Email/password combo does not exist');
      })
  },
  logout(request, response) {
    const user = request.session.user;
    console.log('logging out server side', user, request.session);

    request.session.destroy();
    response.clearCookie('userID');
    response.clearCookie('userName');
    response.clearCookie('expiration');

    response.json(user);
  },
  // findSuperUser(request, response) {
  //   console.log('finding super user...');
  //   const superUserId = '5b6bbf12a01ce26195c85cb0'
  //   User.findById(superUserId)
  //     .then(user => {
  //       console.log(user);
  //       response.json(user);
  //     });
  // }
};

function completeLogin(request, response, user) {
  request.session.user = user.toObject();
  delete request.session.user.password;

  console.log('completing login', request.session.user);

  response.cookie('userID', user._id.toString());
  response.cookie('userName', user.firstName + ' ' + user.lastName);
  response.cookie('expiration', Date.now() + 50000 * 1000);

  response.json(user || true);
}
