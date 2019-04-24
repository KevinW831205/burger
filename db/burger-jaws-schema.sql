USE diusg8i6ld5akqiv;


DROP TABLE burgers;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
	PRIMARY KEY (id)
);

SELECT * FROM burgers;
