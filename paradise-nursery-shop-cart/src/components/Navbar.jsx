import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const cartItems = useSelector(state => state.cart.items);

    // Dynamically calculate total quantity
    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <nav className="navbar">
            <h2 className="logo">Paradise Nursery</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">
                    Cart ({totalQuantity})
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
