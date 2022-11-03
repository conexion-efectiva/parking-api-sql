CREATE TABLE floor(
    floorId INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    code INT NOT NULL,
    description VARCHAR(200) NOT NULL,
    spostqyt INT NOT NULL
)

CREATE TABLE ticket(
    ticketId INT PRIMARY KEY AUTO_INCREMENT,
    startDate DATE,
    endDate DATE,
    spotNumber INT NOT NULL
)


CREATE TABLE users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(200) NOT NULL,
    name VARCHAR(200),
    password VARCHAR(200) NOT NULL,


    UNIQUE email (email)
)
