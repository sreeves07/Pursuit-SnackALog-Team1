DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log;

\c snack_a_log;

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    fiber INT SET DEFAULT 0, 
    protein INT, 
    added_sugar INT, 
    is_healthy BOOLEAN, 
    image TEXT
);