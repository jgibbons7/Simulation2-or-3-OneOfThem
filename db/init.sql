CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(20),
  password VARCHAR(20),
  profile_pic text
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img text,
    content text,
    author_id INT REFERENCES users (id)
);

ALTER TABLE users
ALTER COLUMN password TYPE TEXT;

-- Test Data
insert into users (username, password, profile_pic)
VALUES ('Josh', 'test', 'img.url');