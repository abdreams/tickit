import { Strategy as LocalStrategy } from 'passport-local';
import { findOne, findById } from 'postgresql://startup_owner:M8dpQA2riLmj@ep-jolly-snowflake-a1jdfxct.ap-southeast-1.aws.neon.tech/startup?sslmode=require'; // Replace with your path

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await findOne({ email });
            if (!user) {
                return done(null, false, { message: 'User not found' });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password' });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});