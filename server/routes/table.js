import express from 'express';

import { createTable,getTable, updateTable } from '../controllers/table.js';

const router = express.Router();

//router.get('/',createNews);
router.get('/',getTable);
router.get('/create',createTable);
router.patch('/:id',updateTable);
export default router;