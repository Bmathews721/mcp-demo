# API Documentation

Complete API reference for the MCP Demo Sandbox environment.

## Base URL

```
Production: https://mcp-demo-sandbox.vercel.app
Development: http://localhost:3000
```

## Authentication

This sandbox environment does not require authentication. All endpoints are publicly accessible for testing purposes.

**Note**: In production environments, you would implement proper authentication using API keys, JWT tokens, or OAuth.

---

## Endpoints

### Health Check

Check the health and status of the API service.

**Endpoint**: `GET /api/health`

**Response**: `200 OK`

```json
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

**Example**:
```bash
curl https://mcp-demo-sandbox.vercel.app/api/health
```

---

### Users API

Retrieve mock user data.

**Endpoint**: `GET /api/data/users`

**Response**: `200 OK`

```json
{
  "users": [
    {
      "id": "user_demo_001",
      "name": "Alice Johnson",
      "email": "alice.johnson@demo.example.com",
      "role": "admin",
      "created_at": "2024-01-15T10:30:00Z",
      "last_login": "2025-10-28T09:15:00Z",
      "status": "active",
      "metadata": {
        "department": "Engineering",
        "location": "San Francisco, CA"
      }
    }
    // ... more users
  ],
  "metadata": {
    "total_count": 5,
    "active_count": 5,
    "last_updated": "2025-10-28T10:00:00Z"
  }
}
```

**Fields**:
- `id` (string): Unique user identifier
- `name` (string): User's full name
- `email` (string): User's email address
- `role` (string): User role (admin, developer, reviewer, viewer)
- `created_at` (ISO 8601): Account creation timestamp
- `last_login` (ISO 8601): Last login timestamp
- `status` (string): Account status (active, inactive, suspended)
- `metadata` (object): Additional user information

**Example**:
```bash
curl https://mcp-demo-sandbox.vercel.app/api/data/users | jq '.users[0]'
```

---

### Projects API

Retrieve mock project data.

**Endpoint**: `GET /api/data/projects`

**Response**: `200 OK`

```json
{
  "projects": [
    {
      "id": "proj_demo_001",
      "name": "MCP Integration Suite",
      "description": "Model Context Protocol integration and testing framework",
      "status": "active",
      "created_at": "2024-06-01T10:00:00Z",
      "updated_at": "2025-10-28T09:30:00Z",
      "owner": "user_demo_001",
      "team_members": ["user_demo_001", "user_demo_002", "user_demo_004"],
      "tags": ["mcp", "integration", "testing"],
      "metrics": {
        "total_deployments": 42,
        "last_deployment": "2025-10-27T15:00:00Z",
        "uptime_percentage": 99.8
      }
    }
    // ... more projects
  ],
  "metadata": {
    "total_count": 5,
    "active_count": 4,
    "maintenance_count": 1,
    "last_updated": "2025-10-28T10:00:00Z"
  }
}
```

**Fields**:
- `id` (string): Unique project identifier
- `name` (string): Project name
- `description` (string): Project description
- `status` (string): Project status (active, maintenance, archived)
- `created_at` (ISO 8601): Project creation timestamp
- `updated_at` (ISO 8601): Last update timestamp
- `owner` (string): User ID of project owner
- `team_members` (array): Array of user IDs
- `tags` (array): Project tags/labels
- `metrics` (object): Project metrics and statistics

**Example**:
```bash
curl https://mcp-demo-sandbox.vercel.app/api/data/projects | jq '.projects[] | select(.status == "active")'
```

---

### Metrics API

Retrieve mock system and application metrics.

**Endpoint**: `GET /api/data/metrics`

**Response**: `200 OK`

```json
{
  "metrics": {
    "api_performance": {
      "total_requests": 125847,
      "successful_requests": 124932,
      "failed_requests": 915,
      "error_rate": 0.73,
      "avg_response_time_ms": 125,
      "p50_response_time_ms": 95,
      "p95_response_time_ms": 320,
      "p99_response_time_ms": 850,
      "period": "last_24_hours",
      "timestamp": "2025-10-28T10:00:00Z"
    },
    "user_activity": {
      "total_users": 5,
      "active_users_today": 4,
      "active_users_week": 5,
      "new_users_month": 0,
      "avg_session_duration_minutes": 45,
      "total_sessions_today": 12,
      "timestamp": "2025-10-28T10:00:00Z"
    },
    // ... more metric categories
  },
  "metadata": {
    "collection_period": "2025-10-27T10:00:00Z to 2025-10-28T10:00:00Z",
    "data_points": 1440,
    "aggregation": "hourly",
    "last_updated": "2025-10-28T10:00:00Z"
  }
}
```

**Metric Categories**:
- `api_performance`: API request and response metrics
- `user_activity`: User engagement and activity metrics
- `deployment_stats`: Deployment success and failure rates
- `resource_usage`: System resource utilization
- `error_tracking`: Error counts and types
- `sandbox_health`: Overall sandbox health status

**Example**:
```bash
# Get error rate
curl https://mcp-demo-sandbox.vercel.app/api/data/metrics | jq '.metrics.api_performance.error_rate'

# Get uptime
curl https://mcp-demo-sandbox.vercel.app/api/data/metrics | jq '.metrics.sandbox_health.uptime_hours'
```

---

### Logs API

Retrieve mock application logs.

**Endpoint**: `GET /api/data/logs`

**Response**: `200 OK`

```json
{
  "logs": [
    {
      "id": "log_001",
      "timestamp": "2025-10-28T09:58:23.456Z",
      "level": "INFO",
      "service": "api-gateway",
      "message": "Request processed successfully",
      "metadata": {
        "method": "GET",
        "path": "/api/data/users",
        "status": 200,
        "duration_ms": 45,
        "user_id": "user_demo_001"
      }
    }
    // ... more logs
  ],
  "metadata": {
    "total_count": 10,
    "time_range": {
      "start": "2025-10-28T09:58:23.456Z",
      "end": "2025-10-28T10:01:50.234Z"
    },
    "log_levels": {
      "DEBUG": 1,
      "INFO": 6,
      "WARN": 2,
      "ERROR": 2,
      "CRITICAL": 0
    },
    "services": [
      "api-gateway",
      "authentication",
      "database",
      "deployment",
      "cache",
      "monitoring",
      "background-jobs"
    ]
  }
}
```

**Fields**:
- `id` (string): Unique log entry identifier
- `timestamp` (ISO 8601): Log entry timestamp
- `level` (string): Log level (DEBUG, INFO, WARN, ERROR, CRITICAL)
- `service` (string): Service that generated the log
- `message` (string): Log message
- `metadata` (object): Additional contextual information

**Example**:
```bash
# Get all errors
curl https://mcp-demo-sandbox.vercel.app/api/data/logs | jq '.logs[] | select(.level == "ERROR")'

# Get logs from specific service
curl https://mcp-demo-sandbox.vercel.app/api/data/logs | jq '.logs[] | select(.service == "api-gateway")'
```

---

## Error Responses

All endpoints may return error responses with the following format:

### 404 Not Found

```json
{
  "error": "Not Found",
  "message": "The requested resource was not found",
  "status": 404
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "status": 500
}
```

---

## Rate Limiting

**Current Status**: Disabled for testing

In production environments, rate limiting would be enforced:
- 100 requests per minute per IP
- 1000 requests per hour per API key
- Custom limits for authenticated users

---

## CORS Policy

**Current Policy**: Permissive (for testing)

All origins are allowed for testing purposes:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

**Production Recommendation**: Restrict to specific domains.

---

## Data Freshness

All mock data is static and does not update in real-time:
- Users: 5 mock users
- Projects: 5 mock projects
- Metrics: Static 24-hour snapshot
- Logs: Static 10-entry sample

For testing dynamic behavior, implement client-side simulation or use timestamp-based generation.

---

## Testing Tips

### Using curl
```bash
# Pretty-print JSON with jq
curl -s https://mcp-demo-sandbox.vercel.app/api/health | jq

# Filter specific fields
curl -s https://mcp-demo-sandbox.vercel.app/api/data/users | jq '.users[].email'

# Save response to file
curl -o users.json https://mcp-demo-sandbox.vercel.app/api/data/users
```

### Using JavaScript/Fetch
```javascript
// Fetch users
const response = await fetch('https://mcp-demo-sandbox.vercel.app/api/data/users');
const data = await response.json();
console.log(data.users);

// Fetch with error handling
try {
  const response = await fetch('https://mcp-demo-sandbox.vercel.app/api/health');
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  console.log('Health:', data.status);
} catch (error) {
  console.error('Error:', error);
}
```

### Using Python/Requests
```python
import requests

# Fetch metrics
response = requests.get('https://mcp-demo-sandbox.vercel.app/api/data/metrics')
data = response.json()
print(f"Error rate: {data['metrics']['api_performance']['error_rate']}%")
```

---

## Changelog

### v0.1.0 (2025-10-28)
- Initial API release
- Health check endpoint
- Mock data endpoints (users, projects, metrics, logs)
- Basic documentation

---

For issues or questions, see the main [README](../README.md) or [CREDENTIALS](./CREDENTIALS.md) documentation.
