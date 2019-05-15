CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE games(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (200),
description VARCHAR (250),
image VARCHAR (250),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)