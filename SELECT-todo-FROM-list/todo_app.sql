\c Baseem
DROP DATABASE IF EXISTS todo_app;
DROP USER IF EXISTS michael;
DROP TABLE IF EXISTS tasks;


CREATE DATABASE todo_app;
\c todo_app

CREATE USER michael WITH PASSWORD 'stonebreaker';

CREATE TABLE tasks (
    id int PRIMARY KEY,
    title       varchar(40) NOT NULL,
    description         varchar(255) NOT NULL,
    created_at   date,
    updated_at   date NULL,
    completed    boolean
);

ALTER TABLE tasks
DROP COLUMN completed;

ALTER TABLE tasks
ADD completed_at date NULL DEFAULT NULL;

ALTER TABLE tasks
ALTER COLUMN updated_at SET NOT NULL;

ALTER TABLE tasks
ALTER COLUMN updated_at SET DEFAULT now();

INSERT INTO tasks
VALUES ('001','Study SQL','Completed this Exercise',now(),now(),NULL);

UPDATE tasks
SET title = 'Study PostgreSQL'
WHERE title = 'Study SQL';

UPDATE tasks
SET title = 'Completed this Exercise'
WHERE title = 'Read all the documentation';

SELECT *
FROM tasks
WHERE false;

UPDATE tasks SET completed_at = now() 
WHERE title = 'Study SQL';

-- SELECT *
-- FROM tasks
-- WHERE completed_at = NULL;

SELECT *
FROM tasks
ORDER BY created_at DESC;

INSERT INTO tasks (title, description)
VALUES ('mistake 1','a test entry');

INSERT INTO tasks (title, description)
VALUES ('mistake 2','another test entry');

INSERT INTO tasks (title, description)
VALUES ('third mistake','another test entry');

SELECT *
FROM tasks 
WHERE title LIKE '%mistake%';

DELETE FROM tasks
WHERE title = 'mistake 1';

SELECT title, description
FROM tasks
WHERE title LIKE '%mistake%';

DELETE FROM tasks
WHERE title LIKE '%mistake%';

SELECT *
FROM tasks
ORDER BY title ASC;
