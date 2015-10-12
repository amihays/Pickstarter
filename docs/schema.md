# Schema Information

## projects
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
description     | text      | not null
user_id         | integer   | not null, foreign key (references users), indexed
genre_id        | integer   | not null, foreign key (references genres), indexed
deadline        | datetime  | not null
artist_name     | string    | not null
image           | attachment| not null
music_clip_path | string    | not null
funding_goal    | float     | not null


## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed
amount      | float     | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
