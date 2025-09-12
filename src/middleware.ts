import { NextResponse, NextRequest } from "next/server";

const publicRoutes = [
  { path: "/login", whenAuthenticated: "redirect" },
  { path: "/", whenAuthenticated: "redirect" },
  { path: "/singin", whenAuthenticated: "redirect" },
] as const;

const dynamicPublicRoutes = [
  "/products/",
  "/products/edit/",
] as const;

const REDIRECT_NOT_AUTHENTICATED = "/login";
const REDIRECT_AUTHENTICATED = "/products"; 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value;
  
  const isExactPublicRoute = publicRoutes.some(route => route.path === path);
  
  const isDynamicPublicRoute = dynamicPublicRoutes.some(route => 
    path.startsWith(route)
  );

  const isPublicRoute = isExactPublicRoute || isDynamicPublicRoute;

  if (!token && isPublicRoute) {
    return NextResponse.next();
  }

  if (!token && !isPublicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectUrl);
  }

  if (token && isPublicRoute) {
    const publicRouteConfig = publicRoutes.find(route => route.path === path);
    if (publicRouteConfig?.whenAuthenticated === "redirect") {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.pathname = REDIRECT_AUTHENTICATED;
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};