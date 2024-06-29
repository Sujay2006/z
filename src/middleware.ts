import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)',
])
// const isIgnoredRoute = createRouteMatcher(
//   ['/sign-in', '/sign-up']
// )
export default clerkMiddleware((auth, req)=>{
  // if(!isIgnoredRoute(req)) auth().protect();
  if(protectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};