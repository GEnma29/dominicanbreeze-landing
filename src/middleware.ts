import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authStatus = request.cookies.get('bad-user')
  const isAuthenticated = authStatus ? true : false
  
  // Comprueba si la ruta actual es '/error'
  const isErrorPage = request.nextUrl.pathname === '/error'

  // Si el usuario está autenticado y no está en la página de error, redirige a '/error'
  if (isAuthenticated && !isErrorPage) {
    return NextResponse.redirect(new URL('/error', request.url))
  }

  // En cualquier otro caso, permite que la solicitud continúe
  return NextResponse.next()
}

export const config = {
  // Excluye explícitamente '/error' del matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|error).*)'],
}