\echo 'Delete and recreate lifetracker db?'
\prompt 'Press return for yes or control-C for cancel > ' answer

DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql