#!/bin/bash
# Initialize database schema locally
# Usage: ./init-db.sh

if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL not set"
  echo "Set it in .env or run: export DATABASE_URL=postgres://..."
  exit 1
fi

echo "Initializing database schema..."
echo "Using: $DATABASE_URL"
echo ""

psql "$DATABASE_URL" -f db/schema.sql

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Database schema initialized successfully!"
  echo ""
  echo "Tables created:"
  psql "$DATABASE_URL" -c "\dt"
else
  echo "❌ Failed to initialize database"
  exit 1
fi
