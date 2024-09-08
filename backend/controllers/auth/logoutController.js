export default async function logoutUser(req, res) {
    try {
        // Clear the token by setting it to an empty string and expiring it immediately
        res.cookie('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            expires: new Date(0), // Set the cookie expiration to a past date
        });

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ error: 'Logout failed' });
    }
}