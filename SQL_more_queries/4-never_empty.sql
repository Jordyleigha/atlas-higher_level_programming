-- create table with default value in id column

CREATE TABLE IF NOT EXISTS id_not_null (
    id int DEFAULT 1,
    name VARCHAR(256)
);