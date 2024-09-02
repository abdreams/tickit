// Google OAuth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('http://localhost:3000/emp');
    });

// Microsoft OAuth
app.get('/auth/microsoft', passport.authenticate('azure_ad_oauth2'));
app.get('/auth/microsoft/callback',
    passport.authenticate('azure_ad_oauth2', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/profile');
    });