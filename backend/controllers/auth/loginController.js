
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { prisma } from '../../config/database/db.js';

const SECRET = process.env.HASH_SECRET;
const JWT_SECRET = process.env.JWT_TOKEN_SECRET; 
const JWT_EXPIRES_IN =  process.env.JWT_EXPIRES_IN; 

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await prisma.user.findUnique({
            where: { email: email },
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Compare the provided password (concatenated with the secret) with the stored hashed password
        const isMatch = await bcrypt.compare(password + SECRET, user.password_hash);

        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES_IN,
        });

        // Store the JWT token in cookies
        res.cookie('token', token, {
            httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
            secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent only over HTTPS in production
            maxAge: 3600000, // 1 hour in milliseconds
        });

        console.log('Login successful:', user);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(400).json({ error: error.message });
    }
}

export default loginUser;