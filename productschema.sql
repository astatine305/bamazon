DROP DATABASE IF EXIST bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(70) NOT NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
values 
("Picture Frame", "Home Decor", 10.00, 55), 
("Nike Shoes", "Clothing", 130.00, 70),
("Yeti Rambler", "Outdoor", 35.00, 20), 
("Tent", "Outdoor", 55.00, 39),
("Dryer Sheets", "Household", 7.85, 150), 
("Drones", "Toys", 195.00, 40),
("Lego Set", "Toys", 35.00, 1), 
("Leather Belt", "Clothing", 35.00, 2),
("Digital Camera", "Electronics", 99.00, 5), 
("External Hard Drive", "Electronics", 65.00, 10)  
