import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Cities from "./components/Cities";
import Countries from "./components/Countries";
import CityDetails from "./components/CityDetails";
import Form from "./components/Form";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

// this will load the bundle at once it will slow the first download bundle
// import Homepage from "./pages/Homepage";
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";

//lazy loading bundle (when needed)
const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={<Spinner className="min-h-screen bg-[#2d3439] text-white" />}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            {/* Nested Route 
              index route by default show when /app is called by default index will be served*/}
            {/* <Route
            index
            element={<Cities cities={cities} isLoading={isLoading} />}
          /> */}
            <Route index element={<Navigate to="cities" replace />} />
            <Route path="cities" element={<Cities />} />
            <Route path="cities/:id" element={<CityDetails />} /> {/* params */}
            <Route path="countries" element={<Countries />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

//<Navigate to="cities" replace /> just like redirect
