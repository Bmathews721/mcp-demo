# MCP Demo - Sandbox Credentials for Anthropic Reviewers

This is a demo repository for testing MCP (Model Context Protocol) integrations. It provides sandbox credentials and mock data for Anthropic reviewers.

## Overview

This demo includes:
- Test GitHub repository (`autonomy/mcp-demo`)
- Dummy Vercel project configuration
- Mock data files simulating production data
- Sample Next.js application for testing

## Quick Start

### 1. GitHub Repository

This repository is set up at: `github.com/autonomy/mcp-demo`

**Test Credentials:**
```
Repository: autonomy/mcp-demo
Clone URL: git@github.com:autonomy/mcp-demo.git
Access: Public (for review purposes)
```

### 2. Vercel Project

**Project Details:**
```
Project Name: mcp-demo-sandbox
Project ID: prj_demo_sandbox_12345
URL: https://mcp-demo-sandbox.vercel.app
Environment: Preview/Development
```

**Deployment:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd sandbox/mcp-demo
vercel deploy

# Deploy to production
vercel --prod
```

### 3. Mock Data

Located in `data/` directory:
- `users.json` - Sample user data
- `projects.json` - Sample project metadata
- `metrics.json` - Sample analytics/metrics
- `logs.json` - Sample application logs

## Project Structure

```
mcp-demo/
├── README.md              # This file
├── package.json           # Node dependencies
├── vercel.json            # Vercel configuration
├── .env.example           # Environment variables template
├── app/                   # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── api/               # API routes
│       ├── health/        # Health check endpoint
│       └── data/          # Mock data endpoints
├── data/                  # Mock data files
│   ├── users.json
│   ├── projects.json
│   ├── metrics.json
│   └── logs.json
└── docs/                  # Documentation
    ├── API.md             # API documentation
    └── CREDENTIALS.md     # Sandbox credentials
```

## API Endpoints

### Health Check
```bash
GET https://mcp-demo-sandbox.vercel.app/api/health
```

**Response:**
```json
{
  "status": "ok",
  "service": "mcp-demo",
  "timestamp": "2025-10-28T10:00:00Z"
}
```

### Mock Data Endpoints

#### Get Users
```bash
GET https://mcp-demo-sandbox.vercel.app/api/data/users
```

#### Get Projects
```bash
GET https://mcp-demo-sandbox.vercel.app/api/data/projects
```

#### Get Metrics
```bash
GET https://mcp-demo-sandbox.vercel.app/api/data/metrics
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
# Application
NEXT_PUBLIC_APP_NAME=MCP Demo
NEXT_PUBLIC_APP_URL=https://mcp-demo-sandbox.vercel.app

# Mock Services (non-functional, for testing only)
MOCK_API_KEY=demo_key_12345
MOCK_DATABASE_URL=postgresql://demo:demo@localhost:5432/demo
MOCK_REDIS_URL=redis://localhost:6379

# Feature Flags
ENABLE_MOCK_AUTH=true
ENABLE_RATE_LIMITING=false
```

## Testing MCP Integrations

### 1. GitHub Integration
```bash
# Test repository access
gh repo view autonomy/mcp-demo

# List files
gh api repos/autonomy/mcp-demo/contents
```

### 2. Vercel Integration
```bash
# Get project info
vercel project ls

# Get deployments
vercel list mcp-demo-sandbox
```

### 3. Google Drive Integration
```
Folder: MCP Demo - Sandbox Data
URL: https://drive.google.com/drive/folders/1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3
Contains:
- sample-document.pdf
- metrics-report.xlsx
- user-data-export.csv
- api-logs-sample.txt
```

## Credentials for Reviewers

See `docs/CREDENTIALS.md` for full access details.

**Quick Access:**
- GitHub: Public repository, no credentials needed
- Vercel: Preview deployments accessible via URL
- Drive: Shared folder with view-only access

## Security Notes

⚠️ **Important**: This is a SANDBOX environment only.

- All credentials are non-functional/mock values
- No real user data or production systems
- Safe for testing and demonstration
- Do not use these patterns in production

## Support

For questions or issues with the sandbox:
- Open an issue: `github.com/autonomy/mcp-demo/issues`
- Contact: sandbox-support@auai.cloud

## License

MIT License - For demonstration purposes only
