import { Request, Response } from 'express';
import { getUserById } from '../models/userModel';
import { generateJwtToken, verifyToken } from '../utils/jwt'
import { encrypt, decrypt} from '../utils/encry-decrypt'

export const getUser = async (req: Request, res: Response) => {
  const message = "Hello, this is a secret message!";
  const encryptedMessage = encrypt(message);
  console.log("Encrypted:", encryptedMessage);
  
  const decryptedMessage = decrypt(encryptedMessage);
  console.log("Decrypted:", decryptedMessage);
  const id = req.params.id; 
  try {
    let token = generateJwtToken()
    console.log(verifyToken(token))
    const user = await getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};