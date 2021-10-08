--run this from within localhost
CREATE DATABASE weekend-to-do-app;

--run this from within the database
CREATE TABLE to_do (
    id SERIAL PRIMARY KEY,
    item varchar(250) NOT NULL,
    completed boolean NOT NULL
);

--optional test field
INSERT INTO to_do ( "item", "completed" )
VALUES ( 'finish weekend challenge to-do app', true );