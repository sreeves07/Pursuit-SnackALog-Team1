DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log;

\c snack_a_log;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    fiber INT DEFAULT 0, 
    protein INT DEFAULT 0, 
    added_sugar INT DEFAULT 0, 
    is_healthy BOOLEAN, 
    image TEXT
);