import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CodepushServer } from "CodepushServer";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
        mutations: {
            retry: false,
        },
    },
});

const App = () => {

    CodepushServer.initServer();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
