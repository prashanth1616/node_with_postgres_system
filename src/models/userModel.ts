import pool from '../config/database';

export const getUserById = async (id: string) => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};