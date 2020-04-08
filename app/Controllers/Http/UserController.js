'use strict'

const User = use('App/Models/User');

class UserController {
    store({request}) {
        const {email, password} = request.all();
        console.log(email,password);
        const user = User.create({
            username: email,
            email,
            password
        });
        return user;
    };
}

module.exports = UserController
