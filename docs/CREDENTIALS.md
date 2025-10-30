# MCP Server Credentials Guide

This document explains how to obtain and configure credentials for the Autonomy MCP Server demo.

## ⚠️ Important Notice

**This guide covers setting up credentials for the 3 MCP integrations:**
- GitHub (code review tools)
- Vercel (deployment status tools)
- Google Drive (document access tools)

All credentials are used **read-only** by the MCP server. No write operations are supported.

---

## GitHub Credentials

The GitHub integration enables AI-powered code review and PR management.

### Required Tools
- `autonomy/review_pr` - Fetch PR details with diff and files
- `autonomy/list_prs` - List all PRs in a repository

### Creating a Personal Access Token

**Step 1: Navigate to GitHub Settings**
```
https://github.com/settings/tokens/new
```

**Step 2: Configure Token**
- **Note**: `Autonomy MCP Server - Read Only`
- **Expiration**: 90 days (recommended) or custom
- **Scopes**:
  - ✅ `repo` (Full control of private repositories)
    - Or `public_repo` if you only need access to public repos
  - ✅ `read:org` (Read org and team membership, read org projects)

**Step 3: Generate and Copy Token**
```bash
# Token format: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Step 4: Add to Environment**
```bash
# In mcp-demo/.env.local
GITHUB_TOKEN=ghp_your_actual_token_here
```

### Testing GitHub Integration
```bash
# Using GitHub CLI
gh auth status

# Test API access
curl -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/repos/Bmathews721/autonomy/pulls

# Expected: 200 OK with PR list
```

### Security Best Practices
- ✅ Use fine-grained tokens when available (beta)
- ✅ Set shortest expiration that works for your workflow
- ✅ Rotate tokens every 90 days
- ✅ Never commit tokens to git
- ❌ Don't share tokens in screenshots or logs

---

## Vercel Credentials

The Vercel integration provides deployment status and build logs.

### Required Tools
- `autonomy/deploy_status` - List deployments for a project
- `autonomy/get_deployment` - Get detailed deployment info and logs

### Creating an API Token

**Step 1: Navigate to Vercel Tokens Page**
```
https://vercel.com/account/tokens
```

**Step 2: Create New Token**
- **Token Name**: `Autonomy MCP Server`
- **Scope**:
  - ✅ Full Account (for accessing all projects)
  - Or select specific projects if preferred
- **Expiration**: Custom (365 days recommended)

**Step 3: Copy Token**
```bash
# Token format: [random_string]
# Example: xqwYT9k3L8mNpRs4V7WzAbCdEfGh
```

**Step 4: Add to Environment**
```bash
# In mcp-demo/.env.local
VERCEL_API_TOKEN=your_actual_vercel_token_here
```

### Testing Vercel Integration
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Test API access
curl -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  https://api.vercel.com/v9/projects

# Expected: 200 OK with project list
```

### Finding Your Project ID
```bash
# List all projects
curl -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  https://api.vercel.com/v9/projects | jq '.projects[] | {name, id}'

# Portal project: prj_4ECQyyM40VApek2Vg6y8dse22kCI
# PricePulse project: prj_a4r5XlTf40Z28VX9P69Cy0jVdUiK
```

### Security Best Practices
- ✅ Use project-scoped tokens when possible
- ✅ Set 365-day expiration and calendar reminder
- ✅ Delete unused tokens immediately
- ❌ Don't use in client-side code

---

## Google Drive Credentials

The Google Drive integration enables AI to access and summarize documents.

### Required Tools
- `autonomy/report_summary` - Summarize a Drive document
- `autonomy/get_file` - Get file metadata and content
- `autonomy/list_files` - List files in a folder

### Creating a Service Account

For detailed step-by-step instructions, see **[GOOGLE_DRIVE_SETUP.md](./GOOGLE_DRIVE_SETUP.md)**.

**Quick Setup Summary:**

1. **Create GCP Project**
   - Go to https://console.cloud.google.com/
   - Create new project or select existing

2. **Enable Google Drive API**
   - Navigate to APIs & Services → Library
   - Search "Google Drive API"
   - Click Enable

3. **Create Service Account**
   - APIs & Services → Credentials
   - Create Credentials → Service Account
   - Name: `autonomy-mcp-server`
   - Role: None (we'll grant folder access instead)

4. **Generate Private Key**
   - Click on service account
   - Keys → Add Key → Create New Key
   - Type: JSON
   - Download JSON file

5. **Extract Credentials**
   ```bash
   # From downloaded JSON
   SERVICE_ACCOUNT_EMAIL="autonomy-mcp@your-project.iam.gserviceaccount.com"
   PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```

6. **Share Folder with Service Account**
   - Open Google Drive folder
   - Right-click → Share
   - Add service account email with "Viewer" access
   - Copy folder ID from URL:
     ```
     https://drive.google.com/drive/folders/1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3
                                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                             This is your FOLDER_ID
     ```

7. **Add to Environment**
   ```bash
   # In mcp-demo/.env.local
   GOOGLE_SERVICE_ACCOUNT_EMAIL=autonomy-mcp@your-project.iam.gserviceaccount.com
   GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Actual-Key\n-----END PRIVATE KEY-----\n"
   GOOGLE_DRIVE_FOLDER_ID=1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3
   ```

### Testing Google Drive Integration
```bash
# Using gcloud CLI (optional)
gcloud auth activate-service-account \
  --key-file=service-account-key.json

# Test API access (requires API key or OAuth)
curl "https://www.googleapis.com/drive/v3/files?q='$GOOGLE_DRIVE_FOLDER_ID'+in+parents"

# Expected: 200 OK with file list
```

### Demo Folder Contents

The Autonomy demo folder contains sample files for testing:

```
📁 MCP Demo - Sandbox Data
├── 📄 sample-report.pdf (~2 MB)
├── 📊 metrics-dashboard.xlsx (~500 KB)
├── 📋 user-export.csv (~150 KB)
├── 📝 api-logs.txt (~1 MB)
└── 📄 README.txt (~5 KB)
```

**Folder ID**: `1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3`

### Security Best Practices
- ✅ Use service accounts (not user OAuth) for server-to-server
- ✅ Grant minimum permissions (Viewer only)
- ✅ Scope to specific folders, not entire Drive
- ✅ Rotate service account keys annually
- ❌ Don't share private keys in public repos

---

## Environment Variable Summary

After obtaining all credentials, your `.env.local` should look like:

```bash
# Application
NEXT_PUBLIC_APP_NAME=MCP Demo
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# GitHub (for MCP code review tools)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Vercel (for MCP deployment tools)
VERCEL_API_TOKEN=xqwYT9k3L8mNpRs4V7WzAbCdEfGh

# Google Drive (for MCP document tools)
GOOGLE_SERVICE_ACCOUNT_EMAIL=autonomy-mcp@your-project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_DRIVE_FOLDER_ID=1OEc4_A-gckgYt49Q6eOvhNDKo4FZYC-3

# Vercel (auto-populated)
VERCEL_URL=
VERCEL_ENV=development
```

---

## Credential Validation Checklist

Before using the MCP server, verify all credentials:

### GitHub ✅
```bash
curl -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/user
# Expected: 200 OK with your user info
```

### Vercel ✅
```bash
curl -H "Authorization: Bearer $VERCEL_API_TOKEN" \
  https://api.vercel.com/v9/projects
# Expected: 200 OK with project list
```

### Google Drive ✅
```bash
# Check service account email format
echo $GOOGLE_SERVICE_ACCOUNT_EMAIL | grep "@.*\.iam\.gserviceaccount\.com"

# Check private key format
echo $GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY | grep "BEGIN PRIVATE KEY"

# Check folder ID is 33 characters
echo $GOOGLE_DRIVE_FOLDER_ID | grep -E '^.{33}$'
```

---

## Troubleshooting

### GitHub: 401 Unauthorized
- **Cause**: Invalid or expired token
- **Solution**: Regenerate token at https://github.com/settings/tokens

### Vercel: 403 Forbidden
- **Cause**: Token lacks scope for requested project
- **Solution**: Create new token with Full Account scope

### Google Drive: 400 Invalid Credentials
- **Cause**: Malformed private key (newlines not escaped)
- **Solution**: Ensure key is wrapped in quotes with `\n` for newlines:
  ```bash
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nLine1\nLine2\n-----END PRIVATE KEY-----\n"
  ```

### Google Drive: 404 File Not Found
- **Cause**: Service account doesn't have access to folder
- **Solution**: Share folder with service account email (Viewer permission)

---

## Security & Compliance

### Token Rotation Schedule
| Service | Recommended Rotation | Maximum Age |
|---------|---------------------|-------------|
| GitHub PAT | 90 days | 365 days |
| Vercel Token | 365 days | No limit |
| Google Service Account | 365 days | No limit |

### Access Scope
All MCP tools are **read-only**:
- ✅ List resources (PRs, deployments, files)
- ✅ Read content (diffs, logs, documents)
- ❌ Create resources
- ❌ Update resources
- ❌ Delete resources

### Compliance Notes
- **GDPR**: Service account may access EU user data if Drive folder contains it
- **HIPAA**: Not HIPAA-compliant (no BAA with Google/GitHub/Vercel)
- **SOC 2**: All three services are SOC 2 Type II certified

---

## Support & Resources

### Documentation
- GitHub API: https://docs.github.com/en/rest
- Vercel API: https://vercel.com/docs/rest-api
- Google Drive API: https://developers.google.com/drive/api/v3/reference

### Getting Help
- **GitHub Issues**: https://github.com/Bmathews721/autonomy/issues
- **Email**: support@auai.cloud
- **Slack**: #mcp-server (internal)

---

Last Updated: 2025-10-29
