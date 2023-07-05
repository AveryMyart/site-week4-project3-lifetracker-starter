const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require('../config')

function createUserJWT(user) {
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = jwt.sign(payload, SECRET_KEY, { algorithm: "HS256", expiresIn: "1h" });
    return token
}



function validateToken(token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return decoded;
    } catch (err) {
      return null;
    }
}


module.exports = {
    validateToken,
    createUserJWT
}
