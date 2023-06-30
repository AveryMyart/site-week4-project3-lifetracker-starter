const {UnauthorizedError} = require("./utils/errors")

class User {
    static async login(credentials) {
        // submit email and password 
        // if any fields are missing throw an error
        //
        // look up user in db by email
        // if a user exists compare subitted password w password in db 
        //if theres a match, return user
        // 
        //if any of this goes wrong throw an error
        throw new UnauthorizedError("Invalid email/pasword combo")

    }

    static async register(credentials) {
        // user should submit email, password, firstName, lastName
        // if any fields are missing throw an error
        //
        // make sure no user exist with same email, if so throw error
        //
        // take user password and hash it
        // take user email and lowercase it
        //
        // create a new user in db with all info 
        // return user

    }
}

module.exports = User 