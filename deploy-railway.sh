#!/bin/bash
# Railway Deployment Instructions
# Deploy your Express backend + PostgreSQL to Railway

echo "=== YIHE Backend Deployment to Railway ==="
echo ""
echo "Step 1: Go to https://railway.app/dashboard"
echo "Step 2: Click 'New Project' → 'Deploy from GitHub'"
echo "Step 3: Select repository: sajidsallu13-sudo/yihe-international-trade-site"
echo "Step 4: Add PostgreSQL plugin"
echo "Step 5: Create service with these settings:"
echo ""
echo "Service Configuration:"
echo "- Name: yihe-backend"
echo "- Root Directory: . (repo root)"
echo "- Start Command: node server/index.js"
echo "- Environment Variables:"
echo "  DATABASE_URL: (automatically set from PostgreSQL plugin)"
echo "  PORT: 4000"
echo ""
echo "Step 6: Deploy"
echo "Step 7: Get the backend URL from Railway dashboard"
echo "Step 8: Copy that URL to Vercel as NEXT_PUBLIC_API_URL"
