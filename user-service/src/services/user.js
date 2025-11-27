import bcrypt from 'bcrypt';
import { createUser as createUserModel, listUsers as listUsersModel, deleteUser as deleteUserModel } from '../models/user.js';

export const createUser = async (email, password) => {
   const hashedPassword = await bcrypt.hash(password, 10);
   const user = await createUserModel(email, hashedPassword);
   return user;
};

export const listUsers = async () => {
    const users = await listUsersModel();
    return users;
};

export const deleteUser = async (id) => {
    const user = await deleteUserModel(id);
    return user;
};