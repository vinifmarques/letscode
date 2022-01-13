import React from 'react'
import Products from '../Products/index'
import './index.css'

function List() {
    return (
        <ul className='lista'>
            <li className='itens'>
                <Products />
            </li>
        </ul>
    )
}

export default List
