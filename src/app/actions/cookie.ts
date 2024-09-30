'use server'

import { cookies } from 'next/headers'

export async function setBadUserCookie() {
  cookies().set('bad-user', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })
  return { success: true }
}