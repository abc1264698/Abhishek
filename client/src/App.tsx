import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function HashSwitch() {
  // Use the hash from the URL
  const hashLoc = window.location.hash.replace(/^#/, "") || "/";
  return (
    <Switch location={hashLoc}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <HashSwitch />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
