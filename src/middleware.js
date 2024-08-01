import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

// Define role-based access rules
const roleBasedRoutes = {
  admin: ['/admin', '/admin/board', '/admin/message'], // Example admin pages
  agent: ['/agent', '/agent/dashboard', '/agent/reports'], // Example agent pages
  agency: ['/agency', '/agency/overview', '/agency/contracts'], // Example agency pages
};

// Middleware function
export function middleware(request) {

  const cookieStore = cookies()
  const role = cookieStore.get('role').value



  // Extract role from request. Assuming role is stored in a cookie.
  // let role = request.cookies.get('role'); // Adjust to your actual method of extracting the role
  // let role = "agent";
  // Extract the requested URL path
  const pathname = request.nextUrl.pathname;

  // Check if the role exists in roleBasedRoutes
  if (role && roleBasedRoutes[role]) {
    // If the user's role is in the role-based routes configuration
    if (roleBasedRoutes[role].includes(pathname)) {
      // Allow access to the route
      return NextResponse.next();
    } else {
      // Redirect to the appropriate page or show an access denied page

      return NextResponse.redirect(new URL('/not-found', request.url));
    }
  } else {
    // If role does not exist or user is not logged in
    return NextResponse.redirect(new URL('/not-found', request.url));
  }
}

// Configure middleware to match all routes
export const config = {
  matcher: ['/admin/:path*', '/agent/:path*', '/agency/:path*', '/owner/:path*', '/access-denied']
};
