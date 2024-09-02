const { my_verify } = require("../utils/jwt")
const fetch_data = require("../utils/postgres")



const verify_token = () => {
   return async(req, res, next) => {
    let { token } = req.headers
    
    if(!token){
        res.status(404).send({
            success: false,
            message: "🧐 Token not available 🤷‍♂️"
        })
        return
    }

    let { id } = my_verify(token)
 
    let [user] = await fetch_data("Select * from users where id = $1", id)
  
    if(user){
      req.userId = user.id
     
      next()
    } else {
        res.status(403).send({
            success: false,
            message: "token error ⚡"
        })
    }
   }
}

module.exports = verify_token