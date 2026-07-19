#!/bin/bash
# Vercel Deployment Instructions
# Run these commands to deploy your Next.js frontend to Vercel

echo "=== YIHE Frontend Deployment to Vercel ==="
echo ""
echo "Prerequisites:"
echo "1. Vercel CLI installed: npm install -g vercel"
echo "2. Logged in: vercel login (or already authenticated)"
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
  echo "Installing Vercel CLI..."
  npm install -g vercel
fi

echo "Deploying to Vercel..."
echo ""

# Deploy (will prompt for project setup on first run)
vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "After deployment:"
echo "1. Go to https://vercel.com/dashboard"
echo "2. Find your project: yihe-international-trade-site"
echo "3. Add environment variable: NEXT_PUBLIC_API_URL = <RAILWAY_BACKEND_URL>"
echo "4. Redeploy with the new environment variable"
