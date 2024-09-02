import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const googleClientID = process.env.google_client_id || " ";
const googleClientSecret = process.env.google_client_secret || " ";
passport.use(new GoogleStrategy({
    clientID: `${googleClientID}`,
    clientSecret: `${googleClientSecret}`,
    callbackURL: 'http://localhost:3000/auth/google/callback'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await prisma.user.findUnique({ where: { googleId: profile.id } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    googleId: profile.id,
                    email: profile.emails[0].value
                }
            });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));