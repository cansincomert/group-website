import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import { SiteLayout } from "./components/site/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Industries from "./pages/Industries";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import UnitsOverview from "./pages/units/UnitsOverview";
import UnitDetail from "./pages/units/UnitDetail";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/mission", element: <Mission /> },
      { path: "/units", element: <UnitsOverview /> },
      { path: "/units/:slug", element: <UnitDetail /> },
      { path: "/industries", element: <Industries /> },
      { path: "/insights", element: <Insights /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
