import React from "react";
import Product from "../Product";

const ProductList = ({ products }) => (
    <section>
        <h1>Tipo de Produto</h1>
        <div>
            {
                products.map(product => <Product key={product.id} {...product} />)
            }
        </div>
    </section>
)
export default ProductList