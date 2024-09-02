import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
//import User from 'postgresql://startup_owner:M8dpQA2riLmj@ep-jolly-snowflake-a1jdfxct.ap-southeast-1.aws.neon.tech/startup?sslmode=require';

passport.use(new GoogleStrategy({
    clientID: '775355362096-k5oc8eajsdfirn4bsn7lalv6srvvut97.apps.googleusercontent.com',
    clientSecret: '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',
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