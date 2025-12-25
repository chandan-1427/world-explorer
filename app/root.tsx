import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { GlobalLoadingBar } from "./components/ui/GlobalLoadingBar";
import { ScrollToTopButton } from "./components/ui/ScrollToTopButton";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, 
        retry: 1, 
      },
    },
  }));
    
  const navigation = useNavigation();
  
  const isNavigating = navigation.state === "loading";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
        <GlobalLoadingBar isVisible={isNavigating} />
        <Navbar />
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Page Not Found" : "Application Error";
    details = error.status === 404 
      ? "The page you're looking for doesn't exist or has been moved." 
      : "Something went wrong on our end.";
  }

  return (
    <main className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 bg-white/60 backdrop-blur-xl rounded-3xl border border-slate-200 shadow-xl text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{message}</h1>
        <p className="text-slate-600 mb-8">{details}</p>
        <a 
          href="/" 
          className="inline-block w-full py-3 px-6 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all active:scale-[0.98]"
        >
          Back to Explorer
        </a>
      </div>
    </main>
  );
}
