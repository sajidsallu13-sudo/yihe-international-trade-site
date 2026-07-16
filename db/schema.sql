-- Suppliers and contacts
CREATE TABLE IF NOT EXISTS suppliers (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_name TEXT,
  email TEXT,
  phone TEXT,
  country TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT now()
);
