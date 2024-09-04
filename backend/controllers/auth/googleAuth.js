
import {OAuth2Client} from 'google-auth-library'
import jwt from 'jsonwebtoken'

import { prisma } from '../../config/database/db.js';


const JWT_SECRET = process.env.JWT_TOKEN_SECRET; 
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID; 
const client = new OAuth2Client(GOOGLE_CLIENT_ID);


export default async function googleLogin(req,res) {

    try {
        const { token } = req.body;

        // Verify the Google ID token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { sub: googleId, email, name } = payload;

        // Check if user exists in the database
        let user = await prisma.user.findUnique({
            where: { email: email },
        });

        // If user doesn't exist, create a new user
        if (!user) {
            user = await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    // You can store the Google ID or other details if needed
                },
            });
        }

        // Generate a JWT token
        const jwtToken = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        // Store the JWT token in cookies
        res.cookie('token', jwtToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000, // 1 hour
        });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during Google login:', error);
        res.status(400).json({ error: 'Invalid login request' });
    }
    
}



