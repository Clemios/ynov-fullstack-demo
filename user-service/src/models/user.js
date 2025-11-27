import db from '../config/db.js';

const createUser = async (email, password) => {
    const result = await db.query(
        `INSERT INTO users (email, password_hash)
         VALUES ($1, $2)
         RETURNING id, email`,
        [email, password]
      );
      return result.rows[0];
}

const getUserByEmail = async (email) => {
    const result = await db.query(
        `SELECT id, email, password_hash FROM users WHERE email = $1`,
        [email]
    );
    return result.rows[0];
}

const getUserById = async (id) => {
    const result = await db.query(
        `SELECT id, email, password_hash FROM users WHERE id = $1`,
        [id]
    );
    return result.rows[0];
}

const listUsers = async () => {
    const result = await db.query(
        `SELECT id, email FROM users`,
    );
    return result.rows;
}

const deleteUser = async (id) => {
    const result = await db.query(
        `DELETE FROM users WHERE id = $1`,
        [id]
    );
    return result.rows[0];
}

export { createUser, getUserByEmail, listUsers, deleteUser, getUserById };