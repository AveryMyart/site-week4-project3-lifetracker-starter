CREATE TABLE users (
    email           VARCHAR(255) NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    userName        VARCHAR(255) NOT NULL,
    first_name       VARCHAR(255) NOT NULL,
    last_name        VARCHAR(255) NOT NULL,
    password        VARCHAR(255) NOT NULL,
    password_confirm VARCHAR(255) NOT NULL,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
    );