import React from 'react'
import './index.css'

const productList = [
    { id: 0, name: 'Produto A', description: 'Descrição do produto A', price: 1.99 },
    { id: 1, name: 'Produto B', description: 'Descrição do produto B', price: 2.99 },
    { id: 2, name: 'Produto C', description: 'Descrição do produto C', price: 3.99 },
    { id: 3, name: 'Produto D', description: 'Descrição do produto D', price: 4.99 },
    { id: 4, name: 'Produto E', description: 'Descrição do produto E', price: 5.99 }]

function Products() {
    return (
        productList.map((product) =>
            <section className='box-product'>
                <h1>
                    {productList[product.id]["name"]}
                </h1>
                <h3>
                    {productList[product.id]["description"]}
                </h3>
                <h3>
                    R$ {productList[product.id]["price"]}
                </h3>
            </section>
        )
    )
}
export default Products