import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartContainer from "./pages/CartContainer/CartContainer";
import PageLayout from "./layouts/PageLayout";
import Products from "./pages/Products/Products";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./App.scss";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route path="products" element={<Products />}></Route>
                    <Route path="cart" element={<CartContainer />}></Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
