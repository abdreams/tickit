// routes.js


import { Router } from 'express';
const router = Router();

import registerUser from '../../controllers/auth/registerController.js';
import loginUser from '../../controllers/auth/loginController.js';
import logoutUser from '../../controllers/auth/logoutController.js';
import googleLogin from '../../controllers/auth/googleAuth.js';
// User Registration
router.post('/google',googleLogin);
router.post('/sign-up', registerUser);

// User Login
router.post('/sign-in', loginUser);
router.post('/logout', logoutUser)




export default router
