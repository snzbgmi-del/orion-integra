-- Create product_images table
CREATE TABLE IF NOT EXISTS product_images (
  id VARCHAR(255) PRIMARY KEY,
  product_id VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  filename VARCHAR(500) NOT NULL,
  alt VARCHAR(500) DEFAULT '',
  is_primary BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  size INTEGER NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_product_id (product_id),
  INDEX idx_is_primary (is_primary),
  INDEX idx_sort_order (sort_order)
);

-- Create products table if it doesn't exist
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(500) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(255),
  stock_quantity INTEGER DEFAULT 0,
  sku VARCHAR(255) UNIQUE,
  status ENUM('active', 'inactive', 'draft') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_category (category),
  INDEX idx_status (status),
  INDEX idx_sku (sku)
);

-- Insert sample products
INSERT IGNORE INTO products (id, name, description, price, category, stock_quantity, sku) VALUES
('prod_1', 'AI Security Camera Pro', 'Advanced AI-powered security camera with facial recognition', 15999.00, 'cameras', 50, 'CAM-AI-PRO-001'),
('prod_2', 'Smart NVR System', '16-channel Network Video Recorder with cloud storage', 25999.00, 'nvr', 25, 'NVR-SMART-16CH'),
('prod_3', 'Wireless Security Kit', 'Complete wireless security system for homes', 12999.00, 'kits', 75, 'KIT-WIRELESS-HOME'),
('prod_4', 'PTZ Dome Camera', 'Pan-Tilt-Zoom dome camera with night vision', 18999.00, 'cameras', 30, 'CAM-PTZ-DOME-001'),
('prod_5', 'Access Control System', 'Biometric access control with card reader', 22999.00, 'access', 20, 'ACS-BIO-CARD-001');

-- Create trigger to ensure only one primary image per product
DELIMITER //
CREATE TRIGGER IF NOT EXISTS ensure_single_primary_image
  BEFORE UPDATE ON product_images
  FOR EACH ROW
BEGIN
  IF NEW.is_primary = TRUE AND OLD.is_primary = FALSE THEN
    UPDATE product_images 
    SET is_primary = FALSE 
    WHERE product_id = NEW.product_id AND id != NEW.id;
  END IF;
END//
DELIMITER ;

-- Create trigger for new primary images
DELIMITER //
CREATE TRIGGER IF NOT EXISTS ensure_single_primary_image_insert
  BEFORE INSERT ON product_images
  FOR EACH ROW
BEGIN
  IF NEW.is_primary = TRUE THEN
    UPDATE product_images 
    SET is_primary = FALSE 
    WHERE product_id = NEW.product_id;
  END IF;
END//
DELIMITER ;
