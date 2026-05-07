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
import SolutionsOverview from "./pages/solutions/SolutionsOverview";
import SolutionDetail from "./pages/solutions/SolutionDetail";
import ProductsOverview from "./pages/products/ProductsOverview";
import ProductDetail from "./pages/products/ProductDetail";
import PartnersOverview from "./pages/partners/PartnersOverview";
import PartnerDetail from "./pages/partners/PartnerDetail";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/mission", element: <Mission /> },
      { path: "/solutions", element: <SolutionsOverview /> },
      { path: "/solutions/:slug", element: <SolutionDetail /> },
      { path: "/products", element: <ProductsOverview /> },
      { path: "/products/:slug", element: <ProductDetail /> },
      { path: "/partners", element: <PartnersOverview /> },
      { path: "/partners/:slug", element: <PartnerDetail /> },
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
