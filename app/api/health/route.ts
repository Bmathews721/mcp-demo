import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'mcp-demo-sandbox',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: '0.1.0',
    checks: {
      api: 'operational',
      database: 'mock',
      cache: 'mock'
    }
  })
}
