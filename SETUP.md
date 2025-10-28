# Setup Guide - MCP Demo Sandbox

Complete setup instructions for Anthropic reviewers to get the MCP Demo environment running.

## Prerequisites

- **Node.js**: v20 or later
- **npm**: v8 or later (comes with Node)
- **Git**: Latest version
- **Vercel CLI**: Optional, for deployment testing
- **GitHub CLI**: Optional, for GitHub integration testing

## Quick Start (5 minutes)

### 1. Clone Repository

```bash
# Clone from GitHub
git clone https://github.com/autonomy/mcp-demo.git
cd mcp-demo

# Or create from scratch (if repo not yet created)
# See "Manual Setup" section below
```

### 2. Install Dependencies

```bash
npm install
```

**Expected output:**
```
added 200+ packages in 30s
```

### 3. Set Up Environment

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local if needed (optional for basic testing)
# nano .env.local
```

### 4. Start Development Server

```bash
npm run dev
```

**Expected output:**
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### 5. Test Endpoints

Open a new terminal and test:

```bash
# Health check
curl http://localhost:3000/api/health | jq

# Mock data
curl http://localhost:3000/api/data/users | jq '.users[0]'
```

**Success!** If you see JSON responses, the setup is complete.

---

## Detailed Setup

### Manual Setup (From Scratch)

If the repository doesn't exist yet, follow these steps:

#### 1. Create Repository Structure

```bash
# Navigate to sandbox directory
cd sandbox
mkdir mcp-demo
cd mcp-demo

# Initialize project
npm init -y

# Install dependencies
npm install next@latest react@latest react-dom@latest
npm install -D typescript @types/react @types/node eslint eslint-config-next
```

#### 2. Copy Files

Copy all files from the provided sandbox structure:

```
sandbox/mcp-demo/
├── README.md
├── package.json
├── tsconfig.json
├── vercel.json
├── .env.example
├── .gitignore
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
├── data/
│   ├── users.json
│   ├── projects.json
│   ├── metrics.json
│   └── logs.json
└── docs/
    ├── API.md
    ├── CREDENTIALS.md
    └── GOOGLE_DRIVE_SETUP.md
```

#### 3. Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: MCP Demo sandbox setup"
```

#### 4. Create GitHub Repository

**Option A: Using GitHub CLI**
```bash
gh repo create autonomy/mcp-demo --public --source=. --push
```

**Option B: Using GitHub Web UI**
1. Go to https://github.com/new
2. Repository name: `mcp-demo`
3. Owner: `autonomy`
4. Visibility: Public
5. Click "Create repository"
6. Follow instructions to push existing repository

---

## Vercel Deployment

### Option 1: Automatic (via GitHub)

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Import `autonomy/mcp-demo` from GitHub
   - Click "Import"

2. **Configure Project**
   - Project Name: `mcp-demo-sandbox`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `.` (default)
   - Build Command: (leave default)
   - Output Directory: (leave default)

3. **Environment Variables**
   ```
   NEXT_PUBLIC_APP_NAME=MCP Demo
   ENABLE_MOCK_AUTH=true
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Note the deployment URL: `https://mcp-demo-sandbox.vercel.app`

### Option 2: Manual (via Vercel CLI)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

**Expected output:**
```
🔍  Inspect: https://vercel.com/autonomy/mcp-demo-sandbox/[hash]
✅  Production: https://mcp-demo-sandbox.vercel.app
```

---

## Google Drive Setup

Follow the detailed guide in [docs/GOOGLE_DRIVE_SETUP.md](./docs/GOOGLE_DRIVE_SETUP.md).

**Quick version:**

1. Create folder: "MCP Demo - Sandbox Data"
2. Upload mock files (PDF, CSV, XLSX, TXT)
3. Share with "Anyone with the link" (View-only)
4. Note folder ID from URL
5. Update `GOOGLE_DRIVE_FOLDER_ID` in docs

---

## Testing the Setup

### 1. Local Testing

```bash
# Start server
npm run dev

# In another terminal, run tests:
curl http://localhost:3000/api/health
curl http://localhost:3000/api/data/users
curl http://localhost:3000/api/data/projects
curl http://localhost:3000/api/data/metrics
curl http://localhost:3000/api/data/logs

# All should return JSON responses
```

### 2. Production Testing

```bash
# Replace with your actual Vercel URL
VERCEL_URL="https://mcp-demo-sandbox.vercel.app"

curl $VERCEL_URL/api/health
curl $VERCEL_URL/api/data/users
```

### 3. GitHub Integration Testing

```bash
# View repository
gh repo view autonomy/mcp-demo

# List files
gh api repos/autonomy/mcp-demo/contents

# Get README
gh api repos/autonomy/mcp-demo/readme
```

### 4. MCP Integration Testing

```bash
# Example: Test with MCP CLI (if available)
claude mcp use github
claude "Show me the mcp-demo repository"

claude mcp use vercel
claude "List deployments for mcp-demo-sandbox"
```

---

## Verification Checklist

Before considering setup complete, verify:

- [ ] Repository created on GitHub (autonomy/mcp-demo)
- [ ] Local development server runs (`npm run dev`)
- [ ] All API endpoints return JSON (health, users, projects, metrics, logs)
- [ ] TypeScript compilation succeeds (`npm run type-check`)
- [ ] Vercel deployment successful
- [ ] Production URL accessible
- [ ] Google Drive folder created and shared
- [ ] Mock files uploaded to Drive
- [ ] Documentation updated with actual IDs/URLs

---

## Common Issues

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use different port
PORT=3001 npm run dev

# Or kill existing process
lsof -ti:3000 | xargs kill
```

### Issue: Module not found

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:**
```bash
# Regenerate types
rm -rf .next
npm run build
```

### Issue: Vercel deployment fails

**Solution:**
1. Check build logs in Vercel dashboard
2. Verify `vercel.json` configuration
3. Ensure all dependencies in `package.json`
4. Try local build: `npm run build`

### Issue: GitHub push fails

**Solution:**
```bash
# Check remote
git remote -v

# Re-add remote if needed
git remote remove origin
git remote add origin git@github.com:autonomy/mcp-demo.git

# Push with force (only for initial setup)
git push -u origin main --force
```

---

## Next Steps

After setup is complete:

1. **Share Access**
   - GitHub: Repository URL with reviewers
   - Vercel: Deployment URL
   - Drive: Folder shareable link

2. **Document Credentials**
   - Update [docs/CREDENTIALS.md](./docs/CREDENTIALS.md)
   - Add actual folder IDs, project IDs, URLs

3. **Test MCP Integrations**
   - Test with GitHub MCP server
   - Test with Google Drive MCP server
   - Test with Vercel MCP server (if available)

4. **Monitoring** (Optional)
   - Set up Vercel analytics
   - Monitor API usage
   - Track deployment frequency

---

## Support

### Documentation
- [README.md](./README.md) - Overview and quick reference
- [docs/API.md](./docs/API.md) - Complete API documentation
- [docs/CREDENTIALS.md](./docs/CREDENTIALS.md) - Access credentials
- [docs/GOOGLE_DRIVE_SETUP.md](./docs/GOOGLE_DRIVE_SETUP.md) - Drive setup guide

### Contact
- Issues: https://github.com/autonomy/mcp-demo/issues
- Email: sandbox-support@auai.cloud
- Internal: Use Anthropic review channels

---

## Cleanup

When testing is complete:

```bash
# Delete local files
cd ..
rm -rf mcp-demo

# Delete GitHub repository
gh repo delete autonomy/mcp-demo --confirm

# Delete Vercel project
vercel project rm mcp-demo-sandbox

# Delete Google Drive folder
# (Manual: Move to trash in Google Drive web UI)
```

---

**Setup Time**: ~10-15 minutes for full setup
**Maintenance**: Minimal (static demo)
**Lifetime**: Temporary (for review period)

Last Updated: 2025-10-28
