import { NextResponse } from 'next/server'
import logsData from '@/data/logs.json'

export async function GET() {
  return NextResponse.json(logsData)
}
