import { Strategy as AzureStrategy } from 'passport-azure-ad-oauth2';

passport.use(new AzureStrategy({
    clientID: 'YOUR_MICROSOFT_CLIENT_ID',
    clientSecret: 'YOUR_MICROSOFT_CLIENT_SECRET',
    callbackURL: 'http://localhost:3000/auth/microsoft/callback',
    resource: 'https://graph.microsoft.com/'
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await prisma.user.findUnique({ where: { microsoftId: profile.id } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    microsoftId: profile.id,
                    email: profile.emails[0].value
                }
            });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));