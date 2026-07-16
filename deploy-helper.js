#!/usr/bin/env node
/**
 * Deploy automation helper
 * Run: node deploy-helper.js
 */

const fs = require('fs');
const path = require('path');

console.log('=== YIHE Deployment Helper ===\n');

const checks = [
  { name: 'package.json exists', check: () => fs.existsSync('package.json') },
  { name: '.env.example exists', check: () => fs.existsSync('.env.example') },
  { name: 'db/schema.sql exists', check: () => fs.existsSync('db/schema.sql') },
  { name: 'server/index.js exists', check: () => fs.existsSync('server/index.js') },
  { name: 'pages exist', check: () => fs.existsSync('pages') },
  { name: 'Dockerfile exists', check: () => fs.existsSync('Dockerfile') },
  { name: 'docker-compose.yml exists', check: () => fs.existsSync('docker-compose.yml') }
];

let passed = 0;
checks.forEach(c => {
  const ok = c.check();
  console.log(`${ok ? '✅' : '❌'} ${c.name}`);
  if (ok) passed++;
});

console.log(`\n${passed}/${checks.length} checks passed.\n`);

console.log('Deployment options:\n');
console.log('1. LOCAL with Docker:');
console.log('   docker-compose up\n');
console.log('2. RAILWAY (recommended):\n');
console.log('   - New project → Add PostgreSQL');
console.log('   - Connect GitHub repo');
console.log('   - Set env: DATABASE_URL');
console.log('   - Start command: node server/index.js\n');
console.log('3. RENDER:\n');
console.log('   - New Web Service → Connect GitHub repo');
console.log('   - Set env: DATABASE_URL');
console.log('   - Start command: node server/index.js\n');
console.log('4. VERCEL (frontend only):\n');
console.log('   - Import repo, set NEXT_PUBLIC_API_URL env var\n');
