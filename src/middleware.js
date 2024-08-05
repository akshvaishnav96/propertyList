import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

// Define role-based access rules
const roleBasedRoutes = {
  admin: ['/admin', '/admin/board', '/admin/message'], // Example admin pages
  agent: ['/agent', '/agent/dashboard', '/agent/reports'], // Example agent pages
  agency: ['/agency', '/agency/overview', '/agency/contracts'], // Example agency pages
  owner: ["/owner"],
  user: ["/user/payment"]

};

// Middleware function
export async function middleware(request) {

  const cookieStore = cookies();
  const token = cookieStore.get('access_token')?.value;



  const restrictedRoutes = ['/login', '/register'];


  let role;
  let status;


  if (token) {

    const tokenVerify = await fetch(`${request.nextUrl.origin}/api/verify-token`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        token: token
      }
    });

    const tokenVerifyData = await tokenVerify.json();
    role = tokenVerifyData.role
    status = tokenVerifyData.status
  }





  // Extract role from request. Assuming role is stored in a cookie.
  // let role = request.cookies.get('role'); // Adjust to your actual method of extracting the role
  // let role = "agent";
  // Extract the requested URL path
  const pathname = request.nextUrl.pathname;

  if (!role && restrictedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if the role exists in roleBasedRoutes
  if (role) {
    if (restrictedRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL(role == "user" ? "/" : `/${role}`, request.url)); // Redirect to a default page if user has a role
    }
    if (role && roleBasedRoutes[role]) {
      // If the user's role is in the role-based routes configuration
      if (roleBasedRoutes[role].includes(pathname)) {
        // Allow access to the route
        return NextResponse.next();
      } else {
        // Redirect to the appropriate page or show an access denied page

        return NextResponse.redirect(new URL('/login', request.url));
      }
    } else {
      // If role does not exist or user is not logged in
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } else {
    return NextResponse.redirect(new URL(`/`, request.url));
  }
}

// Configure middleware to match all routes
export const config = {
  matcher: ['/admin/:path*', '/agent/:path*', '/agency/:path*', '/owner/:path*', '/access-denied', '/login', '/register', "/user/:path*"]
};
