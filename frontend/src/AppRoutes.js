<<<<<<< Updated upstream
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/Home/HomePage';
import FoodPage from './pages/Food/FoodPage';



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<HomePage />} />
            <Route path="/tag/:tag" element={<HomePage />} />
            <Route path="/food/:id" element={<FoodPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    );
=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/Cart/CartPage';
import HomePage from './pages/Home/HomePage';
import FoodPage from './pages/Food/FoodPage';



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search/:searchTerm" element={<HomePage />} />
            <Route path="/tag/:tag" element={<HomePage />} />
            <Route path="/food/:id" element={<FoodPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    );
>>>>>>> Stashed changes
}