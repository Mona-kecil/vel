import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes that require wallet connection
const PROTECTED_ROUTES = ["/dashboard", "/transactions", "/payments", "/withdrawals"];

// Define public routes that don't require protection
const PUBLIC_ROUTES = ["/", "/pay"];

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Check if this is a protected route
	const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
		pathname.startsWith(route)
	);

	// Check if this is a public route
	const isPublicRoute = PUBLIC_ROUTES.some((route) =>
		pathname.startsWith(route)
	);

	// If it's a protected route, add a header to indicate this
	// The client will handle wallet verification for instant feedback
	if (isProtectedRoute) {
		const response = NextResponse.next();
		response.headers.set("x-requires-wallet", "true");
		return response;
	}

	// For public routes, just continue
	if (isPublicRoute || pathname === "/") {
		return NextResponse.next();
	}

	// For any other routes, continue normally
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!_next/static|_next/image|favicon.ico).*)",
	],
}; 