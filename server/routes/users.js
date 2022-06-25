import express from 'express';
import authenticateToken from '../controllers/verify.js';
import { createUser,LogIn } from '../controllers/user.js';

const router = express.Router();

//router.get('/',createNews);
router.post('/',LogIn);
router.get('/create',createUser);
export default router;