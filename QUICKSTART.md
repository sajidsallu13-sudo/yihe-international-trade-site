# Quick Deployment Guide — YIHE International Trade Services

## What to do now

### 1. Push to GitHub
Run locally in yihe-site folder:
```bash
gh repo create sajidsallu13/yihe-international-trade-site --public --source=. --remote=origin --push
```

### 2. Deploy Backend + Database (Railway recommended)

**Option A: Railway (Recommended)**
- Go to railway.app → New Project → Add PostgreSQL
- Copy DATABASE_URL from Postgres plugin
- Add New Service → Connect to GitHub repo → set Root: . , Start Command: node server/index.js
- Add environment variable: DATABASE_URL (paste the connection string)
- Deploy
- In Railway dashboard, open Query panel and run:
  ```sql
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
  ```
- Copy the backend URL (e.g., https://yihe-backend.onrender.com)

**Option B: Docker (Local Testing)**
```bash
docker-compose up
# Postgres runs on localhost:5432 (user: yihe, password: yihe_dev_pass)
# Backend runs on localhost:4000
# Frontend runs on localhost:3000
```

### 3. Deploy Frontend (Vercel)

1. Go to vercel.com → Import Project → Select your GitHub repo
2. Build Command: npm run build:frontend
3. Output Directory: .next
4. Environment Variable: NEXT_PUBLIC_API_URL = https://<YOUR_BACKEND_URL>
5. Deploy
6. Copy the frontend URL (e.g., https://yihe-international-trade-site.vercel.app)

### 4. GitHub Actions Secrets (for CI/CD auto-deploy)

Once repo is pushed, set these in GitHub repo Settings → Secrets and variables → Actions:
```
VERCEL_TOKEN = <from your Vercel account>
VERCEL_ORG_ID = <from Vercel project settings>
VERCEL_PROJECT_ID = <from Vercel project settings>
```

After this, any push to main will auto-deploy to Vercel.

## Testing

**Test the contact form:**
```bash
curl -X POST https://<BACKEND_URL>/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

**Test supplier registration:**
```bash
curl -X POST https://<BACKEND_URL>/api/supplier/register \
  -H "Content-Type: application/json" \
  -d '{"company_name":"Test Co","contact_name":"John","email":"john@test.com","phone":"123456","country":"USA"}'
```

Check your database (Railway Query panel or psql) for new entries.

## Next Steps

1. Add your company logo (in public/)
2. Update content (home page, about, services)
3. Add blog posts (pages/blog/)
4. Customize styling (styles/globals.css)
5. Add multilingual pages (Chinese/English) if needed
6. Optional: Add SMTP for contact form emails

## Helpful Commands

**Local development:**
```bash
npm run dev          # Frontend + Backend
```

**Database schema:**
```bash
psql $DATABASE_URL -f db/schema.sql
```

**Docker:**
```bash
docker-compose up
```

**Check deployment status:**
```bash
node deploy-helper.js
```

Need help with any step? Let me know!
