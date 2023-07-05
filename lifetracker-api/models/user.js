const database = require('../database')
const {UnauthorizedError, BadRequestError} = require("../utils/errors")
const bcrypt = require("bcrypt")

class User {
    static async makePublicUser(user){
        return {
            email: user.email,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            created_at: user.created_at
        }
    }

    static async login(credentials) {
        // submit email and password 
        // if any fields are missing throw an error
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        //
        // look up user in db by email
        // if a user exists compare subitted password w password in db 
        //if theres a match, return user
        const user = await User.fetchUserByEmail(credentials.email)

        

        // 
        //if any of this goes wrong throw an error

        if (user){
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid){
                return User.makePublicUser(user)
            }
        }
        throw new UnauthorizedError("Invalid email/pasword combo")

    }

    static async register(credentials) {
        // user should submit email, password, firstName, lastName
        // if any fields are missing throw an error
        const requiredFields = ["email", "username", "password", "first_name", "last_name" ]
        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)){
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })
        //
        // make sure no user exist with same email, if so throw error

        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email}`)
        }
        //
        // take user password and hash it
        // take user email and lowercase it
        const lowercasedEmail = credentials.email.toLowerCase()
        const hashedPassword =await bcrypt.hash(credentials.password, 10) 
        
        //
        // create a new user in db with all info 
        const result = await database.query(
            `INSERT INTO users (
                email,
                username,
                password,
                first_name,
                last_name
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING email, username, first_name, last_name, created_at;
            `, [lowercasedEmail, credentials.username, hashedPassword, credentials.first_name, credentials.last_name])
        // return user

        const user = result.rows[0]

        return User.makePublicUser(user)

    }

    static async fetchUserByEmail(email){
        if (!email){
            throw new BadRequestError("No email provided")
        }

        const query = `SELECT * FROM users WHERE email = $1`

        const result = await database.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }
}

module.exports = User 