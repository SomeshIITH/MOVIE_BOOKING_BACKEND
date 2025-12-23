import dotenv from 'dotenv';
dotenv.config();

import bcrypt from 'bcrypt';

export const PORT = process.env.PORT;
export const SALT = bcrypt.genSaltSync(10);