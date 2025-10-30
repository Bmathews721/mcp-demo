# MCP Demo - Sandbox for Autonomy MCP Server

This is a demo repository for testing the **Autonomy MCP Server** integrations with GitHub, Vercel, and Google Drive.

## Overview

This demo includes:
- Test GitHub repository (`Bmathews721/mcp-demo`)
- Vercel project for deployment testing
- Google Drive folder with sample documents
- Sample Next.js application for testing the MCP server

## Quick Start

### 1. GitHub Repository

This repository is set up at: `github.com/Bmathews721/mcp-demo`

**Test Credentials:**
```
Repository: autonomy/mcp-demo
Clone URL: git@github.com:Bmathews/mcp-demo.git
Access: Public (for review purposes)
```

### 2. Vercel Project

**Project Details:**
```
Project Name: mcp-demo
Project ID: prj_YQbqYnzMJpX1QjXeRketjVfk3gfA
URL: mcp-demo-git-main-autonomy-ai.vercel.app
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

### 3. Google Drive Test Data

Located in Google Drive folder (ID: `1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3`):
- `sample-report.pdf` - Sample PDF document
- `metrics-dashboard.xlsx` - Sample Excel spreadsheet
- `user-export.csv` - Sample CSV export
- `api-logs.txt` - Sample text log file

See [docs/GOOGLE_DRIVE_SETUP.md](docs/GOOGLE_DRIVE_SETUP.md) for setup instructions.

## Project Structure

```
mcp-demo/
├── README.md                      # This file
├── package.json                   # Node dependencies
├── vercel.json                    # Vercel configuration
├── .env.example                   # MCP credentials template
├── app/                           # Next.js app directory
│   ├── page.tsx                   # Homepage
│   ├── layout.tsx                 # Root layout
│   └── api/                       # API routes
│       ├── health/                # Health check endpoint
│       └── data/                  # Demo data endpoints
└── docs/                          # MCP Server documentation
    ├── API.md                     # Next.js API reference
    ├── CREDENTIALS.md             # MCP credential setup guide
    └── GOOGLE_DRIVE_SETUP.md      # Google Drive setup guide
```

For the **MCP Server** source code and documentation, see:
```
mcp-autonomy/
├── src/                           # MCP server source code
│   ├── index.ts                   # Server entry point
│   ├── github.ts                  # GitHub integration
│   ├── vercel.ts                  # Vercel integration
│   └── drive.ts                   # Google Drive integration
├── USER_GUIDE.md                  # End-user setup guide
├── DEVELOPER_GUIDE.md             # Developer guide
├── API_REFERENCE.md               # MCP tools documentation
├── ARCHITECTURE.md                # System design
├── TROUBLESHOOTING.md             # Common issues
├── SECURITY.md                    # Security best practices
└── ROADMAP.md                     # Future features
```

## API Endpoints

### Health Check
```bash
GET https://mcp-demo-pi.vercel.app/api/health]
```

**Response:**
```json
{
  "status": "ok",
  "service": "mcp-demo-sandbox",
  "timestamp": "2025-10-28T10:00:00Z"
}
```

### Mock Data Endpoints

#### Get Users
```bash
GET https://mcp-demo-pi.vercel.app/api/data/users
```

#### Get Projects
```bash
GET https://mcp-demo-pi.vercel.app/api/data/projects
```

#### Get Metrics
```bash
GET https://mcp-demo-pi.vercel.app/api/data/metrics
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure MCP server credentials:

```bash
# Application
NEXT_PUBLIC_APP_NAME=MCP Demo
NEXT_PUBLIC_APP_URL=https://mcp-demo-pi.vercel.app/

# MCP Server Credentials (see docs/CREDENTIALS.md for setup)
GITHUB_TOKEN=ghp_your_github_token_here
VERCEL_API_TOKEN=your_vercel_token_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./path/to/service-account-key.json
GOOGLE_DRIVE_FOLDER_ID=1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3
```

For detailed credential setup instructions, see **[docs/CREDENTIALS.md](docs/CREDENTIALS.md)**.

## Testing MCP Integrations

### 1. GitHub Integration
```bash
# Test repository access
gh repo view Bmathews/mcp-demo

# List files
gh api repos/Bmathews/mcp-demo/contents
```

### 2. Vercel Integration
```bash
# Get project info
vercel project ls

# Get deployments
vercel list mcp-demo
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

⚠️ **Important**: This is a SANDBOX/DEMO environment.

- Use your own API credentials (GitHub, Vercel, Google Drive)
- All MCP tools are **read-only** - no write operations
- No production data or systems
- Safe for testing MCP integrations
- See [docs/CREDENTIALS.md](docs/CREDENTIALS.md) for credential security best practices

## Support

For questions or issues with the sandbox:
- Open an issue: `github.com/Bmathews721/mcp-demo/issues`
- Contact: sandbox-support@auai.cloud

## License

MIT License - For demonstration purposes only
