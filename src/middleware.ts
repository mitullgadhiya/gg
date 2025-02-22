import { NextRequest } from "next/server"

const PUBLIC_FILE = /\.(.*)$/

export const config = {
  matcher: [
    "/", // explicit matcher for root route
    "/((?!_next/static).*)",
  ],
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return
  }
}
