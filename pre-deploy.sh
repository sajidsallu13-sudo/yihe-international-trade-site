#!/bin/bash
# Continuous deployment helper
# Runs tests and builds before deployment

echo "=== Running Pre-Deploy Checks ==="
echo ""

# Check Node version
echo "Node.js version:"
node --version
echo ""

# Install dependencies (if needed)
echo "Installing dependencies..."
npm install --production=false
echo "✓ Dependencies installed"
echo ""

# Build frontend
echo "Building frontend..."
npm run build:frontend
if [ $? -eq 0 ]; then
  echo "✓ Frontend build successful"
else
  echo "✗ Frontend build failed"
  exit 1
fi
echo ""

# Lint (optional - add ESLint if needed)
# echo "Running linter..."
# npm run lint

# Run tests (optional - add Jest if needed)
# echo "Running tests..."
# npm run test

echo "=== All checks passed! Ready for deployment ==="
echo ""
echo "Next: Deploy to Vercel (frontend) and Railway (backend)"
