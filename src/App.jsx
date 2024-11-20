import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout";
import { Home } from "./pages/home";
import { ProductDetail } from "./components/product-detail";
import { Korzinka } from "./components/korzinka";
import { Register } from "./components/form/register";
import { Login } from "./components/form/login";
function App() {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="product-detail/:id"
                        element={<ProductDetail />}
                    />
                    <Route path="/korzina" element={<Korzinka />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
