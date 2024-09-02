import User from 'postgresql://startup_owner:M8dpQA2riLmj@ep-jolly-snowflake-a1jdfxct.ap-southeast-1.aws.neon.tech/startup?sslmode=require';

app.post('/auth/sign-up', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        res.status(201).send({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

app.post('/auth/sign-in', passport.authenticate('local'), (req, res) => {
    res.send({ message: 'Signed in successfully' });
});

//middleware to protect routes
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/sign-in');
}