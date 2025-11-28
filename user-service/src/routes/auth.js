import { Router } from 'express';
import { register, login } from '../controllers/auth.js';

const authRouter = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in a user with email and password
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                 email:
 *                   type: string
 *                   format: email
 *       401:
 *         description: Invalid email or password
 */
authRouter.post('/login', login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user and return an authentication token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             required:
 *     responses:
 *       201:
 *         description: User created and logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 email:
 *                   type: string
 *                   format: email
 *       400:
 *         description: Invalid input or failed to create user
 */
authRouter.post('/register', register);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Log out the current user
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Logout successful
 */
authRouter.post('/logout', (req, res) => {
    res.send('Logout');
});

export default authRouter;