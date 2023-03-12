const jwt = require('jsonwebtoken')

const sign = (payload)=>{return jwt.sign({payload},'secret',{expiresIn:'5m'})}
const verfiy = (token)=>{return jwt.verify(token,'secret')}

module.exports = {
    sign,
    verfiy
}