DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamason_db;

USE bamazon_db;

CREATE TABLE products
(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (45) NOT NULL DEFAULT "",
    department_name VARCHAR (45) NOT NULL DEFAULT "",
    price DECIMAL (5, 2) DEFAULT 0.00,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("DC Focus snowboard", "Sports & Outdoors", 359.95, 2),
        ("Soccer Ball", "Sporting Goods", 29.99, 30),
        ("Basketball", "Sporting Goods", 49.99, 30),
        ("Baseball", "Sporting Goods", 4.99, 30),
        ("Baseball Bat", "Sporting Goods", 79.99, 15),
        ("Volleyball", "Sporting Goods", 24.99, 10),
        ("Lacrosse Stick", "Sporting Goods", 109.99, 20),
        ("Golf Balls", "Sporting Goods", 49.99, 20),
        ("Golf Club Set", "Sporting Goods", 799.99, 10),
        ("Putter", "Sporting Goods", 134.99, 10),
        ("Driver", "Sporting Goods", 289.99, 30),
        ("Weight Lifting Bench", "Sporting Goods", 109.99, 5),
        ("Squat Rack", "Sporting Goods", 219.99, 5)
    ;

    SELECT *
    FROM bamazon_db.products;