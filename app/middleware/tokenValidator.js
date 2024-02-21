import  jwt  from "jsonwebtoken";


export const tokenValidator = async (
    request,
    response,
    next
  )=> {
    
    let token = request.headers.authorization;
    if (!token) {
        //throw new AppError("Missing bearer token", 401)
        return response.status(401).json("Missing bearer token")
      }
      token = token.split(" ")[1];
      jwt.verify(token, "IBUJHHY7BGFTRFPs$", (error, decoded) => {
        if (error) {
          return response.status(401).json(error.message)
        }
    })
return next(); 
}      
