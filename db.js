import pg from 'pg'
const { Pool } = pg

const connectionString = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@db:5432/${process.env.POSTGRES_DB}`;

console.log('connectionString', connectionString);

const db = new Pool({
        connectionString,
});

export async function initUsersTable(){
    await db.query('DROP TABLE IF EXISTS users');
    await db.query('CREATE TABLE users (firstname varchar(100) not null,lastname varchar(100) not null)');
};

export default db;