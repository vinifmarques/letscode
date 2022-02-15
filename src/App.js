import React, { Suspense } from 'react'
import Header from './components/Header/index'
import ProductList from './components/ProductList'
import products from './mock/products'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <ProductList products={products}/>
        </>
    )
}

export default App
