# YIHE International Trade Services — Deployment Checklist

## Pre-Deployment ✅
- [x] Project scaffolded (Next.js + Express + Postgres)
- [x] Git initialized with initial commit
- [x] GitHub Actions workflow created (deploy.yml)
- [x] Docker setup files created (Dockerfile + docker-compose.yml)
- [x] Deployment scripts created (setup.sh, deploy-helper.js)
- [x] Documentation created (DEPLOYMENT.md, QUICKSTART.md, README.md)

## Step-by-Step Deployment

### Phase 1: Push to GitHub (You run locally)
- [ ] Run: `gh repo create sajidsallu13/yihe-international-trade-site --public --source=. --remote=origin --push`
- [ ] Verify repo exists on GitHub: https://github.com/sajidsallu13/yihe-international-trade-site

### Phase 2: Deploy Backend (Railway)
- [ ] Go to railway.app, create account if needed
- [ ] New Project → Add PostgreSQL plugin
- [ ] Copy DATABASE_URL from PostgreSQL plugin
- [ ] Add New Service → Connect GitHub repo (sajidsallu13/yihe-international-trade-site)
  - [ ] Set Root Directory: . (repo root)
  - [ ] Set Start Command: node server/index.js
  - [ ] Add env var DATABASE_URL (paste the Postgres connection string)
- [ ] Deploy
- [ ] Once deployed, open Railway Query panel and run db/schema.sql (contents below)
- [ ] Copy backend URL from Railway deployment

**Schema SQL (run in Railway Query panel):**
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

### Phase 3: Deploy Frontend (Vercel)
- [ ] Go to vercel.com, create account if needed
- [ ] Import Project → Select GitHub repo: sajidsallu13/yihe-international-trade-site
- [ ] Framework: Next.js (auto-detected)
- [ ] Build Command: npm run build:frontend
- [ ] Output Directory: .next
- [ ] Environment Variables:
  - [ ] NEXT_PUBLIC_API_URL = https://<YOUR_BACKEND_URL_FROM_STEP_2>
- [ ] Deploy
- [ ] Verify frontend is live at your Vercel URL

### Phase 4: Setup GitHub Actions CI/CD
- [ ] Go to GitHub repo → Settings → Secrets and variables → Actions
- [ ] Add VERCEL_TOKEN:
  - [ ] Go to vercel.com → Account Settings → Tokens → Create New Token
  - [ ] Copy token, paste in GitHub secret
- [ ] Add VERCEL_ORG_ID:
  - [ ] From Vercel account (Org Settings) or project settings
- [ ] Add VERCEL_PROJECT_ID:
  - [ ] From Vercel project Settings → General → Project ID
- [ ] Test: Push a small change to main branch, verify workflow runs in GitHub Actions tab

### Phase 5: Test & Verify
- [ ] Visit frontend URL in browser → should load homepage
- [ ] Test contact form: Fill form, submit, verify email appears in Railway database
- [ ] Test supplier registration: Fill form, submit, verify entry in database
- [ ] Test from curl:
  ```bash
  curl -X POST https://<YOUR_BACKEND_URL>/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","message":"Test message"}'
  ```

## Post-Deployment
- [ ] Update page content (company copy, logo, products)
- [ ] Add blog posts (in pages/blog/)
- [ ] Customize styling (styles/globals.css)
- [ ] Setup email notifications (optional, requires SMTP integration)
- [ ] Monitor database (Railway dashboard)
- [ ] Set up backups (Railway has built-in backups)

## Troubleshooting

**Backend not receiving requests from frontend:**
- Check NEXT_PUBLIC_API_URL is correct in Vercel env vars
- Check CORS is enabled (server/index.js already has cors())
- Check DATABASE_URL is correct in Railway

**Contact form submissions not saving:**
- Verify DATABASE_URL is set in Railway
- Run schema.sql in Railway Query panel
- Check Railway logs for errors

**GitHub Actions not deploying:**
- Verify VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID are set as secrets
- Check GitHub Actions tab for workflow logs
- Ensure deploy.yml is in .github/workflows/

**Local development issues:**
- Run: npm install
- Copy .env.example to .env
- Set DATABASE_URL to your local Postgres
- Run: npm run dev

## Useful Links
- Railway: https://railway.app
- Vercel: https://vercel.com
- Next.js Docs: https://nextjs.org/docs
- Express.js Docs: https://expressjs.com
- PostgreSQL Docs: https://www.postgresql.org/docs

---

Mark items as complete ([ ] → [x]) as you progress. Ask if you need help with any step!
