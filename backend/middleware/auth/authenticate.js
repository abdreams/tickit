import jwt from 'jsonwebtoken'
import logoutUser from '../../controllers/auth/logoutController';

const JWT_SECRET = process.env.JWT_TOKEN_SECRET ; // Replace with your actual JWT secret

function authenticateJWT(req, res, next) {
    try {
        // Get the token from the cookies
        const token = req.cookies.token;

        // If no token is found, logout the user
        if (!token) {
            return logoutUser(req, res, 'No token provided');
        }

        // Verify the token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return logoutUser(req, res, 'Invalid token');
            }

            // If token is valid, attach the decoded payload to the request
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Error verifying token:', error);
        return logoutUser(req, res, 'Token verification failed');
    }
}

// Logout function to clear the JWT token cookie


module.exports = authenticateJWT;
