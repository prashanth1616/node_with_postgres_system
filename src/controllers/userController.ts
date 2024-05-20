import { Request, Response } from 'express';
import { getUserById } from '../models/userModel';

export const getUser = async (req: Request, res: Response) => {
  const id = req.params.id; 
  try {
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