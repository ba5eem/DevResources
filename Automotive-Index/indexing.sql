\c baseem

DROP USER IF EXISTS indexed_cars_user;
DROP DATABASE IF EXISTS indexed_cars;
-- 1. Create a new postgres user named `indexed_cars_user`
CREATE user indexed_cars_user;
-- 1. Create a new database named `indexed_cars` owned by `indexed_cars_user`
CREATE DATABASE indexed_cars OWNER indexed_cars_user;

-- 1. Run the provided `scripts/car_models.sql` script on the `indexed_cars` database

\c indexed_cars;
\timing
\i scripts/car_models.sql;

-- 1. Run the provided `scripts/car_model_data.sql` script on the `indexed_cars` database **10 times**
--    _there should be **223380** rows in `car_models`_
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
-- ## Timing Select Statements

-- Enable timing queries in Postgres by toggling the `\timing` command in the psql shell.


-- 1. Run a query to get a list of all `make_title` values from the `car_models` table where the `make_code` is `'LAM'`, without any duplicate rows, and note the time somewhere. (should have 1 result)with
-- SELECT DISTINCT make_title
-- FROM car_models
-- WHERE make_code = 'LAM';
-- 65.647 ms

-- 1. Run a query to list all `model_title` values where the `make_code` is `'NISSAN'`, and the `model_code` is `'GT-R'` without any duplicate rows, and note the time somewhere. (should have 1 result)
-- SELECT DISTINCT model_title
-- FROM car_models
-- WHERE make_code = 'NISSAN'
-- AND model_code ='GT-R';
--62.630 ms

-- 1. Run a query to list all `make_code`, `model_code`, `model_title`, and year from `car_models` where the `make_code` is `'LAM'`, and note the time somewhere. (should have 1360 rows)

-- SELECT make_code, model_code, model_title, year
-- FROM car_models
-- WHERE make_code = 'LAM';
--74.519 ms


-- 1. Run a query to list all fields from all `car_models` in years between `2010` and `2015`, and note the time somewhere (should have 78840 rows)
--SELECT make_code, make_title, model_code, model_title, year
-- SELECT *
-- FROM car_models
-- WHERE year BETWEEN 2010 AND 2015;
--204.766 ms , HOLY CUPCAKE!

-- 1. Run a query to list all fields from all `car_models` in the year of `2010`, and note the time somewhere (should have 13140 rows)

-- SELECT *
-- FROM car_models
-- WHERE year = 2010;
--79.051 ms



-- //////////////   WITH INDEX \\\\\\\\\\\\\\\\ --

-- Given the current query requirements, "should get all make_titles", "should get a list of all model_titles by the make_code", etc.
-- Create indexes on the columns that would improve query performance.



CREATE INDEX title_idx
ON car_models (make_title);


-- 1. Create a query to get a list of all `make_title` values from the `car_models` table where the `make_code` is `'LAM'`, without any duplicate rows, and note the time somewhere. (should have 1 result)
-- SELECT DISTINCT make_title
-- FROM car_models
-- WHERE make_code = 'LAM';
--47.993 ms

-- 1. Create a query to list all `model_title` values where the `make_code` is `'NISSAN'`, and the `model_code` is `'GT-R'` without any duplicate rows, and note the time somewhere. (should have 1 result)
-- SELECT DISTINCT model_title
-- FROM car_models
-- WHERE make_code = 'NISSAN' AND model_code = 'GT-R';
--55.868 ms


-- 1. Create a query to list all `make_code`, `model_code`, `model_title`, and year from `car_models` where the `make_code` is `'LAM'`, and note the time somewhere. (should have 1360 rows)
-- SELECT make_code, model_code, model_title, car_models
-- FROM car_models
-- WHERE make_code = 'LAM';
--65.145 ms

-- 1. Create a query to list all fields from all `car_models` in years between `2010` and `2015`, and note the time somewhere (should have 78840 rows)
-- SELECT *
-- FROM car_models
-- WHERE year BETWEEN 2010 AND 2015;
--170.319 ms

-- 1. Create a query to list all fields from all `car_models` in the year of `2010`, and note the time somewhere (should have 13140 rows)
-- SELECT *
-- FROM car_models
-- WHERE year = 2010;
--95.232 ms

-- Compare the times of the queries before and after the table has been indexes.

-- Why are queries #4 and #5 not running faster?

-- ## Indexing on table create

-- 1. Add your recorded indexing statements to the `scripts/car_models.sql`
-- 1. Delete the `car_models` table
DROP TABLE car_models;

-- 1. Run the provided `scripts/car_models.sql` script on the `indexed_cars` database
\i scripts/car_models.sql
-- 1. Run the provided `scripts/car_model_data.sql` script on the `indexed_cars` database **10 times**
--    _there should be **223380** rows in `car_models`_
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql
\i scripts/car_model_data.sql


\timing









