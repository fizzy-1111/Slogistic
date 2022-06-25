import jwt from 'jsonwebtoken'

function authenticateToken(req, res, next) {
    const authHeader = req.headers['sending']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    console.log(token)
    jwt.verify(token, "secretKey", function(err,decoded){
      //console.log(token)
      if (err) return res.sendStatus(403)
  
  
      next()
    })
}   
export default authenticateToken;