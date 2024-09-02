CREATE DATABASE users_database;
\c users_database;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    age INT,
    email TEXT,
    password TEXT
);