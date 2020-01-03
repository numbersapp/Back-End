const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets.js')

module.exports = (req,res,next) => {
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token,secrets.jwtSecret, (err,decodedToken) => {
            if(err){
                res.status(401).json({message:'invalid credentials!'})
            }
            else {
                req.user = {
                    id:decodedToken.id,
                    username:decodedToken.username,
                    email:decodedToken.email,
                }
                next();
            }
        })
    }
    else {
        res.status(400).json({message:'no token provided'})
    }
}