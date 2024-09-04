
import bcrypt from 'bcryptjs';
import { prisma } from '../../config/database/db.js';

const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) || 5;
const SECRET = process.env.HASH_SECRET || 'secret';

export default async function registerUser(email, password, name) {
    try {
        // Generate salt with the given value
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        
        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password + SECRET, salt);
        
        // Create a new user in the database
        const user = await prisma.user.create({
            data: {
                email: email,
                password_hash: hashedPassword,
                // name: name,
            },
        });
        
        console.log('User registered successfully:', user);
        return user;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}