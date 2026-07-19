-- Sample test data for YIHE database
-- DO NOT run in production (for testing only)

-- Sample suppliers
INSERT INTO suppliers (company_name, contact_name, email, phone, country) VALUES
('Tech Manufacturing Co.', 'Wang Liu', 'wang.liu@techmanuf.cn', '+86-755-1234-5678', 'China'),
('Global Electronics Ltd.', 'Zhang Wei', 'sales@globalelec.com', '+86-769-9876-5432', 'China'),
('Quality Imports Inc.', 'Li Ming', 'info@qualityimports.com', '+1-555-123-4567', 'USA'),
('European Trade Partners', 'Klaus Schmidt', 'contact@europetrade.de', '+49-30-1234-5678', 'Germany'),
('Asian Supply Chain Hub', 'Raj Kumar', 'sales@asiasupply.in', '+91-22-1234-5678', 'India');

-- Sample contacts
INSERT INTO contacts (name, email, message) VALUES
('John Smith', 'john@example.com', 'I need to import electronics for my startup. Can you help with sourcing and shipping?'),
('Maria Garcia', 'maria@businesscorp.com', 'Looking for reliable suppliers for textile products. What is your process?'),
('Ahmed Hassan', 'ahmed@tradingcompany.ae', 'How much does your quality inspection service cost?'),
('Sophie Martin', 'sophie@retailstore.fr', 'Interested in importing home goods. Need samples first. Timeline?'),
('David Chen', 'david@logistics.com', 'Do you handle customs clearance for all countries?');

-- You can verify with:
-- SELECT * FROM suppliers;
-- SELECT * FROM contacts;
