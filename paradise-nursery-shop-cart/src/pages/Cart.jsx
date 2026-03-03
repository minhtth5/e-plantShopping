import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
    const items = useSelector(state => state.cart.items);

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>

            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}

                    <div className="total-section">
                        Total: ${total}
                    </div>
                </>
            )}

            <div className="cart-buttons">
                <Link to="/products">
                    <button>Continue Shopping</button>
                </Link>
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
