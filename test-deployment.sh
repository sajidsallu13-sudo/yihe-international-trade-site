#!/bin/bash
# Quick deployment test script
# Runs locally before pushing to GitHub

set -e

echo "=== YIHE Deployment Test Suite ==="
echo ""

# Check Node.js
echo "✓ Checking Node.js..."
node --version

# Check npm
echo "✓ Checking npm..."
npm --version

# Check git
echo "✓ Checking git..."
git --version

# Check key files
echo "✓ Checking project structure..."
files=("package.json" "server/index.js" "pages/index.js" "db/schema.sql" "Dockerfile" "docker-compose.yml")
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ Missing: $file"
    exit 1
  fi
done

# Check if node_modules exists (skip if not)
if [ ! -d "node_modules" ]; then
  echo ""
  echo "⚠️  Dependencies not installed. Run: npm install"
else
  echo "✓ Dependencies installed"
fi

# Check .env file
echo ""
echo "✓ Environment setup:"
if [ -f ".env" ]; then
  echo "  ✓ .env exists"
else
  if [ -f ".env.example" ]; then
    echo "  ⚠️  .env not found. Copy from .env.example"
  fi
fi

# Git status
echo ""
echo "✓ Git status:"
git status --short || echo "  (Not a git repo yet)"

echo ""
echo "=== Pre-deployment checks complete ==="
echo ""
echo "Next steps:"
echo "1. npm install          (if not done)"
echo "2. Copy .env.example to .env and update DATABASE_URL"
echo "3. npm run dev          (test locally)"
echo "4. gh repo create ...   (push to GitHub)"
echo "5. Deploy to Railway and Vercel (see QUICKSTART.md)"
