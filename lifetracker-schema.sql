CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(255) NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    username        VARCHAR(255) NOT NULL,
    first_name       VARCHAR(255) NOT NULL,
    last_name        VARCHAR(255) NOT NULL,
    password        VARCHAR(255) NOT NULL,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
    );

    CREATE TABLE sleep (
    id         SERIAL PRIMARY KEY,
    start_time TIMESTAMP NOT NULL,
    end_time   TIMESTAMP NOT NULL,
    user_id    VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL
    );