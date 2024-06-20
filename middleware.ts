import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);
const ignoreRoutes = createRouteMatcher(["/api/webhook"]);

export default clerkMiddleware((auth, req) => {
  // Proveravamo da li ruta treba da bude ignorisana
  if (ignoreRoutes(req)) {
    return; // Ako je ruta jedna od ignorisanih, preskačemo zaštitu
  }

  // Ako ruta treba da bude zaštićena, primenjujemo zaštitu
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
