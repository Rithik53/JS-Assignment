const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({
        username},jwtPassword)
    return signature;

}

function verifyJwt(token) {
  // Your code here
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (err) {
    return false;
  }
}


function decodeJwt(token) {
  // Your code here
  try {
    const decoded = jwt.decode(token);
    return decoded ? true : false;
  } catch (err) {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};