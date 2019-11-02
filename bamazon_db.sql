DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamason_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name (45) VARCHAR DEFAULT "",
    department_name (45) VARCHAR DEFAULT "",
    price DECIMAL (5, 2) DEFAULT 0.00,
    stock_quantity INT NOT NULL DEFAULT 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUES (),
    ();

SELECT * FROM bamazon_db.products;