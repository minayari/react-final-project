import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MianPage";
import SingleProductPage from "./pages/SingleProductPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/product/:productID"
                element={<SingleProductPage />}
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
