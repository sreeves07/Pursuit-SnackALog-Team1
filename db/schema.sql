DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log;

\c snack_a_log;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    fiber INT, 
    protein INT DEFAULT 0, 
    added_sugar INT, 
    is_healthy BOOLEAN, 
    image TEXT
);