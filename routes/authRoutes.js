import express from 'express';
import { createUser, getUser, getUsers } from '../controllers/user.js';
import { loginUser, registerUser } from '../controllers/auth.js';


const router = express.Router();

router.get('/', getUsers);
router.post("/register", registerUser)
router.post("/login", loginUser) 
router.post('/signin', getUser);
router.post('/', createUser);

export default router