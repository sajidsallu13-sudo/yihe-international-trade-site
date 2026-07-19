# YIHE Website Deployment Tracker

Track your deployment progress here.

## Pre-Deployment Checklist

- [ ] All code committed to git
- [ ] README reviewed
- [ ] QUICKSTART.md reviewed
- [ ] Environment variables understood (.env.example)

## Step 1: Push to GitHub

- [ ] GitHub CLI installed (`gh --version`)
- [ ] Authenticated with GitHub (`gh auth login`)
- [ ] Ran: `gh repo create sajidsallu13/yihe-international-trade-site --public --source=. --remote=origin --push`
- [ ] Verified repo on GitHub: https://github.com/sajidsallu13/yihe-international-trade-site

## Step 2: Deploy Backend (Railway)

- [ ] Railway account created (railway.app)
- [ ] PostgreSQL plugin added
- [ ] Backend service created and connected to GitHub
- [ ] Environment variables set:
  - [ ] DATABASE_URL (from PostgreSQL)
  - [ ] PORT = 4000
- [ ] Start command: `node server/index.js`
- [ ] Deployment completed
- [ ] Database schema applied:
  - [ ] Ran: `psql "$DATABASE_URL" -f db/schema.sql`
  - [ ] Verified tables created
- [ ] Backend URL noted: ________________________
- [ ] Health check working: `curl https://<BACKEND_URL>/health`

## Step 3: Deploy Frontend (Vercel)

- [ ] Vercel account created (vercel.com)
- [ ] GitHub repo imported into Vercel
- [ ] Build settings configured:
  - [ ] Build command: `npm run build:frontend`
  - [ ] Output directory: `.next`
- [ ] Environment variables set:
  - [ ] NEXT_PUBLIC_API_URL = <BACKEND_URL>
- [ ] Deployment completed
- [ ] Frontend URL noted: ________________________
- [ ] Homepage loads: Visited frontend URL and saw YIHE homepage

## Step 4: Setup GitHub Actions (Auto-deploy)

- [ ] GitHub repo → Settings → Secrets and variables → Actions accessed
- [ ] Secrets created:
  - [ ] VERCEL_TOKEN (from Vercel account settings)
  - [ ] VERCEL_ORG_ID (from Vercel project)
  - [ ] VERCEL_PROJECT_ID (from Vercel project)
- [ ] Verified `.github/workflows/deploy.yml` is in repo
- [ ] Test push made to main branch
- [ ] GitHub Actions workflow ran successfully

## Step 5: Test Everything

### Contact Form Test
- [ ] Visited frontend → Contact page
- [ ] Filled form with test data
- [ ] Submitted form
- [ ] Checked Railway database:
  - [ ] Ran: `psql "$DATABASE_URL" -c "SELECT * FROM contacts ORDER BY created_at DESC LIMIT 1;"`
  - [ ] Verified entry exists

### Supplier Registration Test
- [ ] Visited frontend → Supplier Registration page
- [ ] Filled form with test data
- [ ] Submitted form
- [ ] Checked Railway database:
  - [ ] Ran: `psql "$DATABASE_URL" -c "SELECT * FROM suppliers ORDER BY created_at DESC LIMIT 1;"`
  - [ ] Verified entry exists

### API Endpoints Test
- [ ] Health check: `curl https://<BACKEND_URL>/health` → Success
- [ ] API status: `curl https://<BACKEND_URL>/api/status` → Success
- [ ] Contact endpoint: `curl -X POST https://<BACKEND_URL>/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","message":"hi"}'` → Success
- [ ] Supplier endpoint: `curl -X POST https://<BACKEND_URL>/api/supplier/register -H "Content-Type: application/json" -d '{"company_name":"Test","email":"test@test.com"}'` → Success

### Navigation Test
- [ ] All pages accessible from homepage
- [ ] Links work correctly:
  - [ ] Home → About → Services → Blog → Contact → Supplier Registration
- [ ] Blog posts load correctly
- [ ] Forms submit without errors

## Post-Deployment

- [ ] Domain setup (optional):
  - [ ] Custom domain connected to Vercel
  - [ ] SSL certificate auto-enabled
- [ ] Analytics setup (optional):
  - [ ] Vercel Analytics enabled
  - [ ] Google Analytics added (if desired)
- [ ] Database backups enabled (Railway auto-backups)
- [ ] Monitoring setup:
  - [ ] Railway alerts configured
  - [ ] Vercel alerts configured

## Future Enhancements

- [ ] Email notifications (SMTP integration)
- [ ] Admin dashboard with auth
- [ ] Supplier portal
- [ ] Blog CMS
- [ ] Analytics dashboard
- [ ] Order management

## Support & Troubleshooting

**If forms don't work:**
- Check NEXT_PUBLIC_API_URL in Vercel
- Verify backend DATABASE_URL in Railway
- Check CORS settings in server/index.js

**If database isn't persisting:**
- Verify DATABASE_URL is set in Railway
- Check that schema was applied: `psql "$DATABASE_URL" -c "\dt"`

**If GitHub Actions fails:**
- Check secrets are set correctly
- Review GitHub Actions logs in repo
- Verify Vercel token is valid

---

**Completed Date:** _______________
**Notes:** ________________________________________________________________

