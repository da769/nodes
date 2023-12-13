import express from 'express';
import { createUser, getUser, getUsers, updateUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/:id', getUser);
router.put('/:id', updateUser);

export default router