import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomepageLayout from "./layouts/HomepageLayout";
import DefaultLayout from "./layouts/DefaultLayout";

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Service from "@/pages/Service";
import News from "@/pages/News";
import NewsArticel from "@/pages/NewsArticel";
import References from "@/pages/References";
import Reference from "@/pages/Reference";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <HashRouter>
                <Routes>
                    <Route element={<HomepageLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/tjanster/:slug" element={<Service />} />
                        <Route
                            path="/referenser/:slug"
                            element={<Reference />}
                        />
                        <Route path="/om-oss" element={<About />} />
                        <Route path="/kontakt" element={<Contact />} />
                    </Route>
                    <Route element={<DefaultLayout />}>
                        <Route path="/nyheter" element={<News />} />
                        <Route
                            path="/nyheter/:slug"
                            element={<NewsArticel />}
                        />
                        <Route path="/referenser" element={<References />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </HashRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
