import { listUsers as listUsersController, deleteUser as deleteUserController } from '../controllers/user.js';
import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.js';

const userRouter = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */

userRouter.get('/', authMiddleware, listUsersController);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *       - User
 *      security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
userRouter.delete('/:id', authMiddleware, deleteUserController);

export default userRouter;