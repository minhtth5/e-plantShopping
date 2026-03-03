import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, deleteItem } from "../redux/cartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />

            <div>
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>

                <div className="cart-controls">
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    {item.quantity}
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <button onClick={() => dispatch(deleteItem(item.id))}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
