Deployment checklist — YIHE INTERNATIONAL TRADE SERVICES

Overview
- Frontend: Next.js (in repo root), deploy to Vercel
- Backend: Express (server/index.js), deploy to Railway or Render (Postgres DB)
- Database: Postgres (Railway / Render / PlanetScale)

Local quickstart
1. cd yihe-site
2. npm install
3. Copy .env.example -> .env and fill values:
   - DATABASE_URL=postgres://user:pass@host:5432/dbname
   - PORT=4000
   - NEXT_PUBLIC_API_URL=http://localhost:4000
4. Run locally (dev mode): npm run dev
5. Visit frontend: http://localhost:3000  (Next dev default)
   API: http://localhost:4000

Create a GitHub repository and push (recommended, run locally)
- Using GitHub CLI (recommended):
  gh repo create yihe-international-trade-site --public --source=. --remote=origin --push
- Manual flow:
  1) Create repo on github.com named yihe-international-trade-site
  2) git remote add origin https://github.com/<YOUR_USER>/yihe-international-trade-site.git
  3) git branch -M main
  4) git push -u origin main

Deploy backend (Railway / Render)
1. Create a new project and connect the GitHub repo (select server root if asked).
2. Set start command: node server/index.js
3. Add environment variable: DATABASE_URL with your Postgres connection string.
4. Deploy. After deploy, run the DB schema once:
   - Railway web console has a "Run SQL" tool; paste db/schema.sql
   - Or locally: psql "$DATABASE_URL" -f db/schema.sql
5. Note the backend URL (e.g. https://yihe-backend.up.railway.app)

Deploy frontend (Vercel)
1. Import the GitHub repo into Vercel.
2. Build command: npm run build:frontend  (or next build)
3. Output directory: default (Next.js)
4. Set environment variable in Vercel: NEXT_PUBLIC_API_URL = https://<YOUR_BACKEND_URL>
5. Deploy. Confirm the site URL (e.g., https://yihe-international-trade-site.vercel.app)

Post-deploy checks
- Contact form: POST /api/contact -> confirm entry in contacts table
- Supplier register: POST /api/supplier/register -> confirm entry in suppliers table
- From frontend console, ensure NEXT_PUBLIC_API_URL points to your backend
- Verify CORS works (server default uses cors())

Optional production notes
- Use HTTPS for DATABASE_URL with managed Postgres hosting
- Configure SMTP (not included) for contact confirmation emails
- For internationalization content, add localized pages under /pages (Next i18n enabled in next.config.js)

Need help pushing to GitHub now? If yes, provide your GitHub repo URL or run the gh command locally. If you want, generate a pull request template or add basic LICENSE file next.