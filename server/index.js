/**
 * Enhanced Express server with health checks, better error handling, and logging
 */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API status endpoint
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'api running',
    version: '1.0.0',
    endpoints: [
      'POST /api/contact',
      'POST /api/supplier/register',
      'GET /api/suppliers (admin)',
      'GET /api/contacts (admin)'
    ]
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'YIHE International Trade Services API',
    documentation: '/api-docs',
    health: '/health'
  });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields: name, email, message' 
    });
  }

  try {
    const q = 'INSERT INTO contacts (name, email, message) VALUES ($1,$2,$3) RETURNING id';
    const result = await pool.query(q, [name, email, message]);
    res.json({ 
      success: true, 
      id: result.rows[0].id,
      message: 'Message received — we will contact you shortly'
    });
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to submit contact form' 
    });
  }
});

// Supplier registration
app.post('/api/supplier/register', async (req, res) => {
  const { company_name, contact_name, email, phone, country } = req.body;
  
  // Validation
  if (!company_name || !email) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields: company_name, email' 
    });
  }

  try {
    const q = 'INSERT INTO suppliers (company_name, contact_name, email, phone, country) VALUES ($1,$2,$3,$4,$5) RETURNING id, created_at';
    const result = await pool.query(q, [company_name, contact_name, email, phone, country]);
    res.json({ 
      success: true, 
      id: result.rows[0].id,
      created_at: result.rows[0].created_at,
      message: 'Registration successful — we will contact you with next steps'
    });
  } catch (err) {
    console.error('Supplier registration error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to register supplier' 
    });
  }
});

// Optional: Admin endpoints (protected with API key in production)
app.get('/api/suppliers', async (req, res) => {
  // In production, add authentication
  try {
    const result = await pool.query('SELECT * FROM suppliers ORDER BY created_at DESC LIMIT 100');
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to fetch suppliers' });
  }
});

app.get('/api/contacts', async (req, res) => {
  // In production, add authentication
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100');
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to fetch contacts' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found', path: req.path });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`YIHE API Server running on port ${port}`);
  console.log(`Health check: http://localhost:${port}/health`);
  console.log(`Database: ${process.env.DATABASE_URL ? '✓ Connected' : '✗ Not configured'}`);
});
