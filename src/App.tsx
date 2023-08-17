import React from "react";

import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";


import Header from "./components/Header";
import Footer from "./components/Footer";



const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {path: '/fotoSite', element: <Home/>},
            {path: '/fotoSite/products/:id', element: <Products/>},
            {path: '/fotoSite/product/:id', element: <ProductDetails/>},
            {path: '/fotoSite/search', element: <Search/>}
        ]
    }
])

const App = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
