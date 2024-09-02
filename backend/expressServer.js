import express, { json, urlencoded } from 'express';
import { initialize, session as _session } from 'passport';
import session from 'express-session';
import { prisma } from './config/database/db';

const app = express();
const database_url= process.env.DATABASE_URL || " ";
app.use(json());
app.use(urlencoded({ extended: true }));

// Session setup
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

// Passport setup
app.use(initialize());
app.use(_session());

// db setup (replace with your own connection string)
prisma.connect(`${database_url}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});