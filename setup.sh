#!/bin/bash
# Setup script for local development

echo "=== YIHE Local Setup ==="

# Install dependencies
echo "Installing dependencies..."
npm install

# Create .env file from template
if [ ! -f .env ]; then
  echo "Creating .env from .env.example..."
  cp .env.example .env
  echo "⚠️  Edit .env with your DATABASE_URL (for local Postgres) and NEXT_PUBLIC_API_URL"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env with your database URL"
echo "2. Run: npm run dev       (frontend at localhost:3000 + backend at localhost:4000)"
echo "3. Or:  docker-compose up (if you have Docker)"
echo ""
echo "To run db schema:"
echo "  psql \$DATABASE_URL -f db/schema.sql"
