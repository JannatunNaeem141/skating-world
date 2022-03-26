import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="inline skate" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: $ {price}</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;