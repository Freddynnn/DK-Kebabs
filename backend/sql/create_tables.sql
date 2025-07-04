-- create_tables.sql
-- Drop tables first to avoid conflicts
DROP TABLE IF EXISTS menu;
DROP TABLE IF EXISTS category;

-- Create category table
CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Create menu table with a foreign key to category
CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url TEXT,
    category_id INT REFERENCES category(id) ON DELETE SET NULL
);


