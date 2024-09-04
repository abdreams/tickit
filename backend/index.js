import  express from 'express';

import 'dotenv/config' 
const PORT = process.env.PORT || 3000;

const app = express();
import cookieParser from 'cookie-parser';

app.use(cookieParser());



import authRoutes from './routes/auth/authRoutes.js'

app.use(express.json());

// auth routes 
app.use('/api/auth',authRoutes)

app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
