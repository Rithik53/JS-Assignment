const { Admin } = require("../db/index");
const bcrypt = require("bcrypt");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implemented admin auth logic
    // Checking the headers and validate the admin from the admin DB.

    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
      username: username,
      password: password
    })
    .then(function(value){
      if(value){
        next();
      } else{
         res.status(403).json({
          msg: "user doesn't exist"
         })
      }
    })
    // try {
    //     const { username, password } = req.headers;

    //     //checking if username exists
    //     const admin = await Admin.findOne({ username });

    //     if (!admin) return res.status(401).json({ message: 'Unauthorized' });
    //     else {
    //       //checking if password is correct
    //       const passwordValidates = bcrypt.compare(
    //         password,
    //         admin.password
    //       );

    //       if (passwordValidates) next();
    //       else return res.status(401).json({ message: 'Unauthorized' });
    //     }

    // }catch (e) {
    //     res.status(401).send();
    // }

}

module.exports = adminMiddleware;