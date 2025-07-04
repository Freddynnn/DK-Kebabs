-- seed_data.sql

-- Insert categories
INSERT INTO category (name) VALUES
('Main'),
('Halal Snack Pack'),
('Burgers'),
('Handmade Gozleme'),
('Hotdogs'),
('Beverages'),
('Sides'),
('Mixed Deals');

-- Insert menu items with category_id matching inserted categories
INSERT INTO menu (name, price, image_url, category_id) VALUES
('Chicken Kebab', 10, 'https://example.com/images/chicken_kebab.jpg', 1),
('Lamb Kebab', 12, 'https://example.com/images/lamb_kebab.jpg', 1),
('Falafel Wrap', 9, 'https://example.com/images/falafel_wrap.jpg', 1),
('Beef Burger', 11, 'https://example.com/images/beef_burger.jpg', 3),
('Mixed HSP', 15, 'https://example.com/images/mixed_hsp.jpg', 2);
