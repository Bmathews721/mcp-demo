# Sandbox Credentials - For Anthropic Reviewers

This document contains all sandbox credentials and access information for testing the MCP Demo environment.

## ⚠️ Important Notice

**All credentials in this document are for SANDBOX/DEMO purposes only.**

- These credentials do not provide access to any real systems
- All data is mock/synthetic
- Safe for testing and demonstration
- Do not use these patterns in production environments

---

## GitHub Access

### Repository
```
Repository Name: mcp-demo
Organization: autonomy
Full Path: autonomy/mcp-demo
URL: https://github.com/autonomy/mcp-demo
```

### Access
```
Type: Public Repository
Authentication: Not required for read access
Clone URL (HTTPS): https://github.com/autonomy/mcp-demo.git
Clone URL (SSH): git@github.com:autonomy/mcp-demo.git
```

### Testing GitHub MCP Integration
```bash
# View repository
gh repo view autonomy/mcp-demo

# List files
gh api repos/autonomy/mcp-demo/contents

# Get repository info
gh api repos/autonomy/mcp-demo

# List commits
gh api repos/autonomy/mcp-demo/commits
```

---

## Vercel Project

### Project Details
```
Project Name: mcp-demo-sandbox
Project ID: prj_demo_sandbox_12345
Organization: autonomy-demo
```

### URLs
```
Production: https://mcp-demo-sandbox.vercel.app
Preview: https://mcp-demo-sandbox-[hash].vercel.app
Development: http://localhost:3000
```

### Mock Environment Variables
```bash
# Application
NEXT_PUBLIC_APP_NAME=MCP Demo
NEXT_PUBLIC_APP_URL=https://mcp-demo-sandbox.vercel.app

# Mock Services (non-functional)
MOCK_API_KEY=demo_key_12345abcdef
MOCK_DATABASE_URL=postgresql://demo:demo@localhost:5432/demo_db
MOCK_REDIS_URL=redis://localhost:6379/0
MOCK_STRIPE_KEY=sk_test_demo_12345
MOCK_TWILIO_SID=ACdemo12345
MOCK_TWILIO_TOKEN=demo_token_12345

# Feature Flags
ENABLE_MOCK_AUTH=true
ENABLE_RATE_LIMITING=false
ENABLE_ANALYTICS=false
```

### Testing Vercel Deployment
```bash
# List deployments
vercel list mcp-demo-sandbox

# Get project info
vercel project ls

# View deployment logs (requires Vercel CLI authentication)
vercel logs [deployment-url]
```

---

## Google Drive

### Folder Details
```
Folder Name: MCP Demo - Sandbox Data
Folder ID: [To be created - insert actual ID here]
URL: https://drive.google.com/drive/folders/[FOLDER_ID]
Access: View-only (shared link)
```

### Contents
```
📁 MCP Demo - Sandbox Data/
├── 📄 sample-document.pdf
│   Description: Sample PDF document with mock data
│   Size: ~2 MB
│
├── 📊 metrics-report.xlsx
│   Description: Sample Excel spreadsheet with metrics data
│   Sheets: Dashboard, API Metrics, User Activity
│   Size: ~500 KB
│
├── 📋 user-data-export.csv
│   Description: CSV export of mock user data
│   Rows: 1000+ (header + 1000 mock users)
│   Size: ~150 KB
│
├── 📝 api-logs-sample.txt
│   Description: Plain text log file
│   Lines: 5000+ log entries
│   Size: ~1 MB
│
└── 📄 README.txt
    Description: Overview of folder contents
    Size: ~5 KB
```

### Accessing Drive Files

**Via Browser:**
```
1. Open: https://drive.google.com/drive/folders/[FOLDER_ID]
2. Files are viewable without login (public link)
3. Download available for all files
```

**Via Google Drive API (for MCP testing):**
```bash
# List files in folder (requires API key)
curl "https://www.googleapis.com/drive/v3/files?q='[FOLDER_ID]'+in+parents&key=[API_KEY]"

# Get file metadata
curl "https://www.googleapis.com/drive/v3/files/[FILE_ID]?key=[API_KEY]"

# Download file
curl "https://www.googleapis.com/drive/v3/files/[FILE_ID]?alt=media&key=[API_KEY]" -o filename
```

---

## API Endpoints

### Base URLs
```
Production: https://mcp-demo-sandbox.vercel.app
Development: http://localhost:3000
```

### Available Endpoints

#### Health Check
```bash
GET /api/health

# Example
curl https://mcp-demo-sandbox.vercel.app/api/health

# Response
{
  "status": "ok",
  "service": "mcp-demo-sandbox",
  "timestamp": "2025-10-28T10:00:00Z",
  "environment": "production",
  "version": "0.1.0",
  "checks": {
    "api": "operational",
    "database": "mock",
    "cache": "mock"
  }
}
```

#### Mock Users API
```bash
GET /api/data/users

# Example
curl https://mcp-demo-sandbox.vercel.app/api/data/users

# Returns: JSON array of 5 mock users with metadata
```

#### Mock Projects API
```bash
GET /api/data/projects

# Example
curl https://mcp-demo-sandbox.vercel.app/api/data/projects

# Returns: JSON array of 5 mock projects with metrics
```

#### Mock Metrics API
```bash
GET /api/data/metrics

# Example
curl https://mcp-demo-sandbox.vercel.app/api/data/metrics

# Returns: JSON object with various performance metrics
```

#### Mock Logs API
```bash
GET /api/data/logs

# Example
curl https://mcp-demo-sandbox.vercel.app/api/data/logs

# Returns: JSON array of 10+ mock log entries
```

---

## Mock Service Credentials

### Mock Database
```
Type: PostgreSQL (simulated)
Host: demo-db.example.com
Port: 5432
Database: demo_db
Username: demo_user
Password: demo_password_12345
Connection String: postgresql://demo_user:demo_password_12345@demo-db.example.com:5432/demo_db
```

### Mock Redis Cache
```
Type: Redis (simulated)
Host: demo-cache.example.com
Port: 6379
Database: 0
Password: demo_redis_pass_12345
Connection String: redis://:demo_redis_pass_12345@demo-cache.example.com:6379/0
```

### Mock Stripe
```
Test Mode: Enabled
Publishable Key: pk_test_demo_12345abcdef
Secret Key: sk_test_demo_12345abcdef
Webhook Secret: whsec_demo_12345abcdef
```

### Mock Twilio
```
Account SID: ACdemo12345abcdef
Auth Token: demo_twilio_token_12345
Phone Number: +15551234567 (E.164 format)
```

### Mock Email (Resend)
```
API Key: re_demo_12345abcdef
From Domain: demo.example.com
From Address: noreply@demo.example.com
```

---

## Testing Instructions

### 1. Clone and Setup
```bash
# Clone repository
git clone https://github.com/autonomy/mcp-demo.git
cd mcp-demo

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev

# Open browser
open http://localhost:3000
```

### 2. Test API Endpoints
```bash
# Health check
curl http://localhost:3000/api/health | jq

# Get mock users
curl http://localhost:3000/api/data/users | jq

# Get mock projects
curl http://localhost:3000/api/data/projects | jq

# Get mock metrics
curl http://localhost:3000/api/data/metrics | jq
```

### 3. Test Vercel Deployment
```bash
# Login to Vercel (uses browser auth)
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment
vercel open
```

### 4. Test MCP Integrations
```bash
# Example: Testing GitHub MCP server
# (Requires MCP server configuration)
claude mcp use github
claude "Show me the contents of autonomy/mcp-demo"

# Example: Testing Google Drive MCP server
claude mcp use drive
claude "List files in the MCP Demo folder"
```

---

## Security Notes

1. **Public Access**: This sandbox is intentionally public for review purposes
2. **No Secrets**: No real secrets or credentials are stored
3. **Rate Limiting**: No rate limiting enabled (safe for testing)
4. **CORS**: Permissive CORS for testing (do not replicate in production)
5. **Authentication**: Mock authentication only, no real user verification

---

## Support & Feedback

### Issues
Report issues or bugs:
- GitHub: https://github.com/autonomy/mcp-demo/issues
- Email: sandbox-support@auai.cloud

### Documentation
- Main README: https://github.com/autonomy/mcp-demo/README.md
- API Docs: https://github.com/autonomy/mcp-demo/docs/API.md

### Contact
For questions about this sandbox:
- Technical Lead: demo-team@auai.cloud
- Anthropic Reviewers: Use internal channels

---

## Version History

- **v0.1.0** (2025-10-28): Initial sandbox setup
  - Basic Next.js app
  - Mock data endpoints
  - GitHub repository structure
  - Vercel deployment configuration
  - Documentation

---

Last Updated: 2025-10-28
