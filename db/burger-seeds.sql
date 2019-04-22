USE burger_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('regular', false);

UPDATE burgers SET devoured = true WHERE id = 2;

SELECT * FROM burgers;

