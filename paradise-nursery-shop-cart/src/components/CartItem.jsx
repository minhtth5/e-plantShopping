import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    // Function to calculate total cost for THIS item
    const calculateItemTotal = () => {
        return item.price * item.quantity;
    };

    const handleIncrease = () => {
        dispatch(updateQuantity({ id: item.id, amount: 1 }));
    };

    const handleDecrease = () => {
        dispatch(updateQuantity({ id: item.id, amount: -1 }));
    };

    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div className="cart-item">
            {/* Thumbnail */}
            <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
            />

            <div className="cart-details">
                {/* Plant Name */}
                <h3>{item.name}</h3>

                {/* Unit Price */}
                <p>Unit Price: ${item.price}</p>

                {/* Individual Item Total */}
                <p>
                    Total Cost: ${calculateItemTotal()}
                </p>

                {/* Quantity Controls */}
                <div className="cart-controls">
                    <button onClick={handleDecrease}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={handleIncrease}>+</button>
                </div>

                {/* Remove Button */}
                <button
                    className="remove-btn"
                    onClick={handleRemove}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;
