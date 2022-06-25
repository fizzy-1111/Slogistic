import express from 'express';

import { createNews, getNews } from '../controllers/newsAction.js';

const router = express.Router();

//router.get('/',createNews);
router.get('/',getNews);
router.get('/create',createNews);
export default router;