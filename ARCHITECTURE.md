# Architecture & Tech Stack

## Frontend
- **Framework:** Next.js 13+ (React)
- **Hosting:** Vercel
- **Features:**
  - Server-side rendering (SSR) ready
  - Internationalization support (i18n config in next.config.js)
  - Static and dynamic pages
  - Built-in Image optimization

## Backend
- **Framework:** Express.js (Node.js)
- **Hosting:** Railway (or Render, Heroku)
- **Port:** 4000
- **Features:**
  - REST API endpoints (/api/contact, /api/supplier/register)
  - CORS enabled for cross-origin requests
  - Body parsing middleware
  - Database integration ready

## Database
- **System:** PostgreSQL
- **Hosting:** Railway Postgres plugin (or PlanetScale, Render)
- **Tables:**
  - `suppliers` - supplier registration
  - `contacts` - contact form submissions
- **Credentials:** Set via DATABASE_URL environment variable

## Deployment Pipeline
- **Source:** GitHub (sajidsallu13/yihe-international-trade-site)
- **CI/CD:** GitHub Actions (.github/workflows/deploy.yml)
- **Frontend auto-deploy:** Vercel (on push to main)
- **Backend:** Manual deploy to Railway (or via GitHub integration)

## Local Development
- **Docker:** docker-compose.yml includes Postgres + Backend + Frontend
- **npm scripts:**
  - `npm run dev` - start both frontend & backend locally
  - `npm run dev:frontend` - Next.js dev server
  - `npm run dev:server` - Express server
  - `npm install` - install dependencies

## Environment Variables

**Local (.env)**
```
DATABASE_URL=postgres://user:pass@localhost:5432/dbname
PORT=4000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

**Production (Railway + Vercel)**
```
Railway:
  DATABASE_URL = <postgres connection string>
  
Vercel:
  NEXT_PUBLIC_API_URL = https://<railway-backend-url>
```

## Security Considerations
- DATABASE_URL should use HTTPS and managed hosting
- NEXT_PUBLIC_* variables are exposed to client (safe for URLs, NOT secrets)
- API secrets should be server-side only (not in NEXT_PUBLIC_*)
- CORS is enabled for all origins (configure for production)
- No authentication on API endpoints yet (add if needed)

## Scalability Notes
- Next.js on Vercel auto-scales
- Railway Postgres can be upgraded for higher load
- Consider caching (Redis) for high traffic
- Add rate limiting for API endpoints in production
- Monitor costs on Vercel and Railway dashboards

## Future Enhancements
- Email notifications (SMTP integration)
- Authentication & user accounts
- Admin dashboard
- Blog CMS integration
- Payment processing (for orders)
- Analytics (Vercel Analytics, PostHog)
- Multilingual content (localized blog, pages)
- Supplier portal with file uploads
- Order tracking system
