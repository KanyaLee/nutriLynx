import React from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Cart = () => {
    return (
        <div className='cart-container'>
            <h1>Carttt</h1>
        </div>
    )
}
export default Cart;

// if user is not logged in, redirect to login page
// if user is logged in, display cart items
// if cart is empty, display "cart is empty" message
// if user adds item to cart, display added message
// if user removes item from cart, display removed message
// if user updates item quantity, display updated message
// if user proceeds to checkout, redirect to checkout page
// if user clicks on an item, redirect to item page
// if user clicks on a category, redirect to category page
// if user clicks on a brand, redirect to brand page
// if user clicks on a promotion, redirect to promotion page
// if user clicks on a blog post, redirect to blog post page
// if user clicks on a link, redirect to link page
// if user clicks on a button, redirect to button page
// if user clicks on a dropdown, redirect to dropdown page
// if there are any errors with adding or removing items from the cart, display error messages 
// if there are any errors with updating the cart, display error messages
// if there are any errors with the checkout process, display error messages