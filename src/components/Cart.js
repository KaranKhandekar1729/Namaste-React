import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };


    return (
        <div className="destination-info">
            <h1>Cart</h1>
            <div className="cart-content">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <>
                        {console.log(cartItems)}
                        <div key={index}>
                            <div className="cart-item">
                                <span>{item.package ? item.name : "Ticket to "+item.name}</span>
                                <div className="cart-action">
                                    <span>${item.price}</span>
                                    <button className="buy-button" onClick={() => handleRemoveItem(item.name)}>Remove Last Item</button>
                                </div>
                            </div>
                        </div>
                        </>
                    ))
                ) : (
                    <p>Your cart is empty. Add items to the cart!</p>
                )}
                <div>
                    <button className="buy-button" onClick={handleClearCart}>Clear Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
