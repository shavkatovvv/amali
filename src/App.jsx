import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home } from "./pages/home";
import { ProductDetail } from "./components/product-detail";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="product-detail/:id"
                        element={<ProductDetail />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
