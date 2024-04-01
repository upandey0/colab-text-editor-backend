import express from 'express'
import userMid from '../middlewares/userMid.js'
import createDocument from '../controllers/createDocument.js';

const router = express.Router();


router.post('/create', userMid, createDocument);

export default router;