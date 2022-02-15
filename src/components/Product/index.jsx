import React from 'react'
import './index.css'
import { displayCurrency } from '../../utility/currency'
import Button from '../Button'



function Product(props) {
    return (
        <div className='container'>
            <section className='box-product'>
                <h1 className='box-content'>
                    {props.name}
                </h1>
                <p className='box-content'>
                    {props.description}
                </p>
                <p className='box-content'>
                    {displayCurrency(props.price)} <Button/>
                </p>
            </section>
        </div>
    )
}
export default Product