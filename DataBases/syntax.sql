

DROP user IF EXISTS michael;

CREATE USER michael WITH ENCRYPTED PASSWORD 'stonebreaker';

DROP DATABASE IF EXISTS todo_app;

CREATE DATABASE todo_app;

\c todo_app;

CREATE TABLE tasks (
  id serial NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  created_at timestamp without time zone NOT NULL DEFAULT NOW(),
  updated_at timestamp without time zone,
  completed boolean NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);

ALTER TABLE tasks DROP COLUMN completed;
ALTER TABLE tasks ADD COLUMN completed_at timestamp DEFAULT NULL;

ALTER TABLE tasks ALTER COLUMN updated_at SET NOT NULL;
ALTER TABLE tasks ALTER COLUMN updated_at SET DEFAULT NOW();
--8/4
INSERT INTO tasks (title, description)
VALUES (
  'Study SQL',
  'Complete this exercise'
);
--8/5
INSERT INTO tasks (title, description)
VALUES (
  'Study PostGreSQL',
  'Read all the documentation'
);
--8/6
SELECT * FROM tasks WHERE completed_at is NULL;

UPDATE tasks SET completed_at = NOW() where title = 'Study SQL';

SELECT title,description FROM tasks WHERE completed_at is NULL;

SELECT * FROM tasks ORDER BY created_at DESC;

INSERT INTO tasks (title, description)
VALUES (
  'mistake 1',
  'a test entry'
);

INSERT INTO tasks (title, description)
VALUES (
  'mistake 2',
  'another test entry'
);

INSERT INTO tasks (title, description)
VALUES (
  'third mistake',
  'another test entry'
);

SELECT title FROM tasks WHERE title LIKE '%mistake%';

--specifically deletes mistake 1
DELETE FROM tasks WHERE title = 'mistake 1';

SELECT title, description FROM tasks WHERE title LIKE '%mistake%';

--deletes all words with mistake in it
DELETE FROM tasks WHERE title LIKE '%mistake%';

SELECT * FROM tasks ORDER BY title ASC;


-- SELECT * FROM users;

-- SELECT * FROM posts
-- WHERE user_id = 100;

-- SELECT first_name, last_name FROM posts WHERE user_id = 200;

-- SELECT posts.id,posts.title,posts.url,posts.content,posts.created_at,posts.updated_at,posts.user_id,users.first_name,users.last_name
-- FROM posts INNER JOIN users ON posts.user_id = users.id
-- WHERE user_id = 200;

-- SELECT posts.id,posts.title,posts.url,posts.content,posts.created_at,posts.updated_at,posts.user_id,users.username
-- FROM posts INNER JOIN users on posts.user_id = users.id
-- WHERE users.first_name = 'Norene' and users.last_name = 'Schmitt';

-- SELECT DISTINCT username
-- FROM users INNER JOIN posts on posts.user_id = users.id
-- WHERE posts.created_at > '2015-01-01 00:00:00-10'
-- ORDER BY username ASC;



//////


DROP user IF EXISTS michael;

CREATE USER michael WITH ENCRYPTED PASSWORD 'stonebreaker';

DROP DATABASE IF EXISTS todo_app;

CREATE DATABASE todo_app;

\c todo_app;

CREATE TABLE tasks (
  id serial NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  created_at timestamp without time zone NOT NULL DEFAULT NOW(),
  updated_at timestamp without time zone,
  completed boolean NOT NULL DEFAULT false,
  PRIMARY KEY (id)
);

ALTER TABLE tasks DROP COLUMN completed;
ALTER TABLE tasks ADD COLUMN completed_at timestamp DEFAULT NULL;

ALTER TABLE tasks ALTER COLUMN updated_at SET NOT NULL;
ALTER TABLE tasks ALTER COLUMN updated_at SET DEFAULT NOW();
--8/4
INSERT INTO tasks (title, description)
VALUES (
  'Study SQL',
  'Complete this exercise'
);
--8/5
INSERT INTO tasks (title, description)
VALUES (
  'Study PostGreSQL',
  'Read all the documentation'
);
--8/6
SELECT * FROM tasks WHERE completed_at is NULL;

UPDATE tasks SET completed_at = NOW() where title = 'Study SQL';

SELECT title,description FROM tasks WHERE completed_at is NULL;

SELECT * FROM tasks ORDER BY created_at DESC;

INSERT INTO tasks (title, description)
VALUES (
  'mistake 1',
  'a test entry'
);

INSERT INTO tasks (title, description)
VALUES (
  'mistake 2',
  'another test entry'
);

INSERT INTO tasks (title, description)
VALUES (
  'third mistake',
  'another test entry'
);

SELECT title FROM tasks WHERE title LIKE '%mistake%';

--specifically deletes mistake 1
DELETE FROM tasks WHERE title = 'mistake 1';

SELECT title, description FROM tasks WHERE title LIKE '%mistake%';

--deletes all words with mistake in it
DELETE FROM tasks WHERE title LIKE '%mistake%';

SELECT * FROM tasks ORDER BY title ASC;


-- SELECT * FROM users;

-- SELECT * FROM posts
-- WHERE user_id = 100;

-- SELECT first_name, last_name FROM posts WHERE user_id = 200;

-- SELECT posts.id,posts.title,posts.url,posts.content,posts.created_at,posts.updated_at,posts.user_id,users.first_name,users.last_name
-- FROM posts INNER JOIN users ON posts.user_id = users.id
-- WHERE user_id = 200;

-- SELECT posts.id,posts.title,posts.url,posts.content,posts.created_at,posts.updated_at,posts.user_id,users.username
-- FROM posts INNER JOIN users on posts.user_id = users.id
-- WHERE users.first_name = 'Norene' and users.last_name = 'Schmitt';

-- SELECT DISTINCT username
-- FROM users INNER JOIN posts on posts.user_id = users.id
-- WHERE posts.created_at > '2015-01-01 00:00:00-10'
-- ORDER BY username ASC;