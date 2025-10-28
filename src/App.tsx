import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Programmes from "./pages/Programmes";
import VieScolaire from "./pages/VieScolaire";
import Statistiques from "./pages/Statistiques";
import Galerie from "./pages/Galerie";
import Actualites from "./pages/Actualites";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import Merci from "./pages/Merci";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/programmes" element={<Programmes />} />
            <Route path="/vie-scolaire" element={<VieScolaire />} />
            <Route path="/statistiques" element={<Statistiques />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merci" element={<Merci />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
