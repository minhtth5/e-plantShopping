import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const cartItems = useSelector(state => state.cart.items);
    const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart ({totalQty})</Link>
        </nav>
    );
}

export default Navbar;
