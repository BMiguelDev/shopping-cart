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
                <Route path="/shopping-cart" element={<PageLayout />}>
                    <Route index element={<Products />}></Route>
                    <Route path="/shopping-cart/cart" element={<CartContainer />}></Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>
                <Route path="/" element={<PageLayout />}> 
                    <Route path="*" element={<ErrorPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
