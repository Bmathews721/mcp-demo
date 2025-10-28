import { NextResponse } from 'next/server'
import usersData from '@/data/users.json'

export async function GET() {
  return NextResponse.json(usersData)
}
