import QueryStream from 'pg-query-stream';
import { Readable } from 'stream';
import pool from '../config/database';

  export const streamedData = (): Promise<Readable> => {
    const query = new QueryStream('SELECT * FROM users');  // Adjust the query as needed
    return pool.connect().then(client => {
      const stream = client.query(query);
      stream.on('end', () => client.release());
      return stream;
    });
  };