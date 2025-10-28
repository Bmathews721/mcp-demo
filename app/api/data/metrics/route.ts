import { NextResponse } from 'next/server'
import metricsData from '@/data/metrics.json'

export async function GET() {
  return NextResponse.json(metricsData)
}
