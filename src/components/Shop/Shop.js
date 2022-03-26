import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Questions from '../Questions/Questions';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // Cart maintain
    const handleAddToCart = (product) => {
        const newCart = [...cart, product.name];
        setCart(newCart);
    }

    // Clear cart 
    const innerCartValue = document.getElementById('innerCart');
    const clearAll = () => {
        innerCartValue.innerHTML = '';
    }

    return (
        <div className='shop-container'>
            <div>
                <div>
                    <h1 className='heading'>Skating World</h1>
                    <p className='heading-text'>Choose your skate and run freely.</p>
                </div>
                <div className="products-container">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>

            </div>
            <div className="cart-container">
                <h3>Cart</h3>
                <div id='innerCart'>
                    {
                        cart.map(item => <p>{item}</p>)
                    }
                </div>
                <div>
                    <button className='cartBtns'>Choose one</button>
                </div>
                <div>
                    <button onClick={clearAll} className="cartBtns">Clear All</button>
                </div>
            </div>
            <div>
                <Questions></Questions>
            </div>
        </div >
    );
};

export default Shop;