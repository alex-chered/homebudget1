CREATE USER homebudget_user WITH ENCRYPTED PASSWORD '12345';

CREATE DATABASE homebudget;
GRANT ALL PRIVILEGES ON DATABASE homebudget TO homebudget_user;