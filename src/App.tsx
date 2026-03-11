import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PRDProvider } from "@/context/PRDContext";
import Dashboard from "./pages/Dashboard";
import PRDList from "./pages/PRDList";
import PRDDetail from "./pages/PRDDetail";
import KanbanBoard from "./pages/KanbanBoard";
import Stakeholders from "./pages/Stakeholders";
import AIInsights from "./pages/AIInsights";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PRDProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/prds" element={<PRDList />} />
              <Route path="/prd/:id" element={<PRDDetail />} />
              <Route path="/kanban" element={<KanbanBoard />} />
              <Route path="/stakeholders" element={<Stakeholders />} />
              <Route path="/insights" element={<AIInsights />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </PRDProvider>
    </QueryClientProvider>
  );
}

export default App;
