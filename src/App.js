import React, { Suspense } from 'react'
import Header from './components/Header/index'
import ProductList from './components/ProductList'
import products from './mock/products'
import './App.css'


const LazyComponentRender = React.lazy( () => import('./components/LazyComponent'))

function App() {
    return (
        <>
            <Suspense fallback={<div>Carregando...</div>}>
                <LazyComponent/>
            </Suspense>
            <Header />
            <ProductList products={products}/>

        </>
    )
}

export default App
