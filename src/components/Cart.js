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
                    <>
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <span>{item.package ? item.name : `Ticket to ${item.name}`}</span>
                                <div className="cart-action">
                                    <span>${item.price}</span>
                                    <button
                                        className="buy-button"
                                        onClick={() => handleRemoveItem(item.name)}
                                    >
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                        ))}
                        <button
                            className="buy-button clear-cart-button"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                    </>
                ) : (
                    <p>Your cart is empty. Start adding items!</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
