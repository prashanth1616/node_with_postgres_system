import jwt, { Secret, JwtPayload } from 'jsonwebtoken';

export const generateJwtToken = () => {
    return jwt.sign({role:'Admin'},'secretKey')
  
  }
export const verifyToken = (token:string) => {
    try{
      let decoded = jwt.verify(token,'secretKey')
      return { success:true, decoded}
    }
    catch(e){
        return { success:false}
    }
  
  
  }