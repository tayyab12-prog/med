import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import Demo from "@/pages/demo";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import Login from "@/pages/auth/login";
import Signup from "@/pages/auth/signup";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/demo" component={Demo} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#0D1117]">
        {/* Only show navbar on non-auth pages */}
        <Switch>
          <Route path="/auth/*">
            <Router />
          </Route>
          <Route>
            <>
              <Navbar />
              <Router />
            </>
          </Route>
        </Switch>
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;