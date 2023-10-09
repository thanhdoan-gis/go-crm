import { NextURL } from 'next/dist/server/web/next-url'
import { NextRequest, NextResponse } from 'next/server'
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
const publicPath = [
  '/auth/login',
]
export default function middleware(request: NextRequest) {
  // // Add your own logic here to check if the user is authenticated
  // const token = request.cookies.get('token')?.value
  // const userIsAuthenticated = token ? JSON.parse(token) : undefined
  // const loginUrl = new URL('/auth/login', request.url)
  // loginUrl.searchParams.set('from', request.nextUrl.pathname)
  // if (!publicPath.find(p => p === request.nextUrl.pathname) && !userIsAuthenticated) {
  //   return NextResponse.redirect(loginUrl);
  // }
}