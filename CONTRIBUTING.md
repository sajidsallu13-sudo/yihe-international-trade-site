# CONTRIBUTING to YIHE International Trade Services

Thanks for your interest! Here's how to contribute.

## Getting Started
1. Fork the repo
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/yihe-international-trade-site.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Set up locally: `npm install && cp .env.example .env`
5. Make changes and test

## Development Workflow
- `npm run dev` - Start frontend + backend locally
- `docker-compose up` - Run with Docker
- `npm run build:frontend` - Build Next.js for production
- `node deploy-helper.js` - Check deployment readiness

## Areas to Contribute
- **Frontend**: Pages, styling, features (pages/, styles/)
- **Backend**: API endpoints, validation, error handling (server/)
- **Database**: Schema, migrations (db/)
- **Docs**: README, guides, comments
- **Tests**: Unit/integration tests (create tests/)

## Code Style
- Use descriptive variable names
- Comment complex logic
- Follow existing patterns
- Test before submitting

## Submitting Changes
1. Push to your fork
2. Create a Pull Request with:
   - Clear title (e.g., "Add blog filtering feature")
   - Description of changes
   - Testing notes
3. We'll review and merge

## Reporting Issues
Open an issue with:
- What happened
- What you expected
- Steps to reproduce
- Environment details

## Questions?
Email: mohd.yihe@gmail.com

Thanks! 🚀
