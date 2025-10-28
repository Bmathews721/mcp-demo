# Google Drive Setup Guide

Instructions for setting up the Google Drive folder with mock data for MCP testing.

## Overview

Create a Google Drive folder containing sample files for testing Google Drive MCP integrations.

## Setup Steps

### 1. Create the Folder

1. Go to [Google Drive](https://drive.google.com)
2. Click "New" → "Folder"
3. Name it: **MCP Demo - Sandbox Data**
4. Note the folder ID from the URL: `https://drive.google.com/drive/folders/[FOLDER_ID]`

### 2. Configure Sharing

1. Right-click the folder → "Share"
2. Click "Change" next to "Restricted"
3. Select "Anyone with the link"
4. Set permissions to "Viewer"
5. Click "Copy link"
6. Save the shareable link

### 3. Create Mock Files

Create the following files in the folder:

#### A. README.txt

```txt
MCP Demo - Sandbox Data
=======================

This folder contains mock data files for testing Google Drive MCP integrations.

Contents:
- sample-document.pdf: Sample PDF document
- metrics-report.xlsx: Sample Excel spreadsheet
- user-data-export.csv: CSV export of mock user data
- api-logs-sample.txt: Plain text log file

Last Updated: 2025-10-28
Contact: sandbox-support@auai.cloud
```

#### B. sample-document.pdf

Create a PDF with the following content (use any PDF creator):

```
MCP Demo - Sample Document
===========================

Project Overview
----------------
This is a sample PDF document for testing Google Drive MCP integrations.

Key Features:
• Multi-page document
• Formatted text
• Headings and sections
• Sample data

Sample Data Section
-------------------
Name: Alice Johnson
Role: Administrator
Department: Engineering
Location: San Francisco, CA

Technical Specifications
------------------------
- API Version: 1.0.0
- Protocol: HTTPS
- Format: REST
- Authentication: Bearer token

Notes
-----
This is mock data for demonstration purposes only.
No real user information is contained in this document.

Page 2 of 2
```

#### C. metrics-report.xlsx

Create an Excel file with the following sheets:

**Sheet 1: Dashboard**
```
| Metric               | Value    | Target   | Status |
|---------------------|----------|----------|--------|
| API Requests        | 125,847  | 100,000  | ✓      |
| Error Rate          | 0.73%    | <1%      | ✓      |
| Avg Response (ms)   | 125      | <200     | ✓      |
| Uptime %            | 99.8%    | >99.5%   | ✓      |
| Active Users        | 5        | N/A      | -      |
```

**Sheet 2: API Metrics**
```
| Timestamp           | Requests | Errors | Latency (ms) |
|--------------------| ---------|--------|--------------|
| 2025-10-28 09:00   | 5,234    | 38     | 118          |
| 2025-10-28 10:00   | 5,412    | 41     | 132          |
| 2025-10-28 11:00   | 5,189    | 35     | 121          |
| 2025-10-28 12:00   | 5,567    | 42     | 145          |
```

**Sheet 3: User Activity**
```
| User ID        | Sessions | Avg Duration (min) | Last Active        |
|---------------|----------|-------------------|-------------------|
| user_demo_001 | 15       | 42                | 2025-10-28 09:15  |
| user_demo_002 | 12       | 38                | 2025-10-27 16:30  |
| user_demo_003 | 18       | 51                | 2025-10-28 08:00  |
| user_demo_004 | 9        | 33                | 2025-10-26 14:20  |
| user_demo_005 | 7        | 28                | 2025-10-25 10:45  |
```

#### D. user-data-export.csv

```csv
id,name,email,role,department,location,created_at,status
user_demo_001,Alice Johnson,alice.johnson@demo.example.com,admin,Engineering,"San Francisco, CA",2024-01-15T10:30:00Z,active
user_demo_002,Bob Smith,bob.smith@demo.example.com,developer,Engineering,"New York, NY",2024-02-20T14:45:00Z,active
user_demo_003,Carol Williams,carol.williams@demo.example.com,reviewer,"Quality Assurance","Austin, TX",2024-03-10T08:20:00Z,active
user_demo_004,David Chen,david.chen@demo.example.com,developer,Engineering,"Seattle, WA",2024-04-05T11:10:00Z,active
user_demo_005,Eva Martinez,eva.martinez@demo.example.com,viewer,Product,Remote,2024-05-12T09:00:00Z,active
user_demo_006,Frank Wilson,frank.wilson@demo.example.com,developer,Engineering,"Boston, MA",2024-06-18T13:25:00Z,active
user_demo_007,Grace Lee,grace.lee@demo.example.com,admin,Operations,"Chicago, IL",2024-07-22T11:40:00Z,active
user_demo_008,Henry Brown,henry.brown@demo.example.com,reviewer,"Quality Assurance","Portland, OR",2024-08-30T09:15:00Z,active
user_demo_009,Irene Davis,irene.davis@demo.example.com,developer,Engineering,"Denver, CO",2024-09-14T14:50:00Z,active
user_demo_010,Jack Miller,jack.miller@demo.example.com,viewer,Product,"Los Angeles, CA",2024-10-05T10:20:00Z,active
```

#### E. api-logs-sample.txt

```txt
2025-10-28T09:58:23.456Z [INFO] api-gateway: Request processed successfully [method=GET path=/api/data/users status=200 duration=45ms user=user_demo_001]
2025-10-28T09:58:45.123Z [WARN] authentication: Rate limit approaching threshold [user=user_demo_002 current=85 limit=100 window=60s]
2025-10-28T09:59:12.789Z [ERROR] database: Connection timeout [query="SELECT * FROM projects WHERE status = 'active'" timeout=5000ms retry=1/3]
2025-10-28T09:59:34.567Z [INFO] deployment: Deployment completed successfully [project=proj_demo_001 version=1.2.3 duration=187s user=user_demo_004]
2025-10-28T09:59:56.234Z [DEBUG] cache: Cache hit for key [key=users:list:active ttl=300s size=4096b]
2025-10-28T10:00:15.890Z [INFO] monitoring: Health check passed [api=pass database=pass cache=pass storage=pass duration=125ms]
2025-10-28T10:00:42.345Z [WARN] api-gateway: Slow request detected [method=POST path=/api/data/projects duration=1543ms threshold=1000ms user=user_demo_003]
2025-10-28T10:01:05.678Z [INFO] authentication: User logged in successfully [user=user_demo_005 ip=203.0.113.42 agent="Mozilla/5.0"]
2025-10-28T10:01:28.901Z [ERROR] api-gateway: Validation error in request [method=POST path=/api/projects error="Missing required field: name" user=user_demo_002]
2025-10-28T10:01:50.234Z [INFO] background-jobs: Scheduled task completed [task=cleanup_expired_sessions items=47 duration=12s next_run=2025-10-28T11:00:00Z]
2025-10-28T10:02:15.567Z [INFO] api-gateway: Request processed successfully [method=GET path=/api/data/metrics status=200 duration=89ms user=user_demo_001]
2025-10-28T10:02:38.890Z [DEBUG] cache: Cache miss for key [key=projects:active:sorted ttl=300s]
2025-10-28T10:03:02.123Z [WARN] database: Query slow [query="SELECT * FROM logs ORDER BY timestamp DESC LIMIT 100" duration=756ms threshold=500ms]
2025-10-28T10:03:25.456Z [INFO] api-gateway: Request processed successfully [method=GET path=/api/health status=200 duration=12ms]
2025-10-28T10:03:48.789Z [ERROR] external-api: API call failed [service=stripe endpoint=/v1/charges error="Network timeout" retry=2/3]
```

### 4. Update Documentation

After creating the folder, update these files with the actual folder ID:

1. **docs/CREDENTIALS.md**
   - Replace `[FOLDER_ID]` with your actual folder ID
   - Update the folder URL

2. **.env.example**
   - Update `GOOGLE_DRIVE_FOLDER_ID` value

3. **README.md**
   - Update Google Drive section with actual folder ID

## Testing Access

### Via Browser
```
1. Open: https://drive.google.com/drive/folders/[YOUR_FOLDER_ID]
2. Verify all files are visible
3. Try downloading a file
4. Confirm no login required (public link)
```

### Via Google Drive API
```bash
# List files (requires API key)
curl "https://www.googleapis.com/drive/v3/files?q='[FOLDER_ID]'+in+parents&key=[API_KEY]" | jq

# Get file metadata
curl "https://www.googleapis.com/drive/v3/files/[FILE_ID]?key=[API_KEY]" | jq
```

### Via MCP Integration
```bash
# Example using hypothetical Drive MCP server
claude mcp use drive
claude "List files in folder [FOLDER_ID]"
claude "Show me the contents of README.txt"
```

## Security Considerations

1. **Public Access**: Folder is intentionally public for testing
2. **Mock Data Only**: Contains no sensitive information
3. **View-Only**: Users can view but not edit or upload
4. **Temporary**: Can be deleted after testing

## Maintenance

- **Regular checks**: Verify folder is accessible
- **Update files**: Keep mock data reasonably current
- **Monitor access**: Check sharing settings remain correct
- **Clean up**: Delete folder when no longer needed

## Troubleshooting

### Issue: Files not visible
- **Check**: Sharing settings are "Anyone with the link"
- **Fix**: Right-click folder → Share → Update permissions

### Issue: Cannot download files
- **Check**: Permissions set to "Viewer" or higher
- **Fix**: Update sharing permissions

### Issue: MCP integration fails
- **Check**: Folder ID is correct in configuration
- **Check**: API key has proper permissions
- **Fix**: Verify MCP server configuration

## Alternative: Google Drive API Setup

For more advanced testing, set up API access:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: "MCP Demo"
3. Enable Google Drive API
4. Create credentials (API key)
5. Add API key to `.env.local`:
   ```
   GOOGLE_DRIVE_API_KEY=your_api_key_here
   ```

## Support

For issues with Google Drive setup:
- Main docs: [README.md](../README.md)
- Credentials: [CREDENTIALS.md](./CREDENTIALS.md)
- Contact: sandbox-support@auai.cloud

---

Last Updated: 2025-10-28
