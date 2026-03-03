import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
    const items = useSelector(state => state.cart.items);

    const calculateTotalAmount = () => {
        return items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {items.map(item => (
                <CartItem key={item.id} item={item} />
            ))}

            <h3>Total Amount: ${calculateTotalAmount()}</h3>
        </div>
    );
}

export default Cart;
