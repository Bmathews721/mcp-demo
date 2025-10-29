import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * CORS Middleware for MCP Demo Sandbox
 *
 * Enables cross-origin requests from any domain for testing purposes.
 * This is safe for the sandbox since all data is mock/non-sensitive.
 */
export function middleware(request: NextRequest) {
  // Handle preflight OPTIONS requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Access-Control-Max-Age': '86400', // 24 hours
      },
    })
  }

  // Add CORS headers to all API responses
  const response = NextResponse.next()

  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')

  return response
}

// Apply middleware to all API routes
export const config = {
  matcher: '/api/:path*',
}
