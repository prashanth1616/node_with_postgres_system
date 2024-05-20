import { Request, Response } from 'express';
import { streamedData } from '../models/streamData';

export const streamData = async (req: Request, res: Response) => {
//   const id = req.params.id; 
try {
    const stream = await streamedData();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Transfer-Encoding', 'chunked');

    stream.on('data', (row) => {
      res.write(JSON.stringify(row) + '\n');
    });

    stream.on('end', () => {
      res.end();
    });

    stream.on('error', (err) => {
      res.status(500).json({ error: err.message });
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};