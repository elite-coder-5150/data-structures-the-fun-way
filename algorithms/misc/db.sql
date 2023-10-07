SELECT customer_name
FROM customers
WHERE customer_id IN (SELECT customer_id
                      FROM orders
                      WHERE order_id IN (SELECT order_id
                                         FROM order_items
                                         WHERE product_id IN (SELECT product_id
                                                              FROM products
                                                              WHERE category_id = (SELECT category_id
                                                                                   FROM categories
                                                                                   WHERE category_name = 'Electronics')))
                        AND order_id IN (SELECT order_id
                                         FROM order_items
                                         WHERE product_price > (SELECT AVG(product_price)
                                                                FROM products
                                                                WHERE category_id = (SELECT category_id
                                                                                     FROM categories
                                                                                     WHERE category_name = 'Electronics'))));


CREATE TABLE customers
(
    customer_id   INT PRIMARY KEY,
    customer_name VARCHAR(255)
);


CREATE TABLE orders
(
    order_id    INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);

CREATE TABLE products
(
    product_id    INT PRIMARY KEY,
    product_name  VARCHAR(255),
    category_id   INT,
    product_price DECIMAL(10, 2),
    FOREIGN KEY (category_id) REFERENCES categories (category_id)
);

CREATE TABLE order_items
(
    order_item_id INT PRIMARY KEY,
    order_id      INT,
    product_id    INT,
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
    FOREIGN KEY (product_id) REFERENCES products (product_id)
);

CREATE TABLE categories
(
    category_id   INT PRIMARY KEY,
    category_name VARCHAR(255)
);
