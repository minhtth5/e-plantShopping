import { plants } from "../data/plants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const categories = [...new Set(plants.map(p => p.category))];

    // Check if plant already exists in cart
    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    };

    return (
        <div className="products-container">
            {categories.map(category => (
                <div key={category}>
                    <h2>{category}</h2>

                    <div className="card-grid">
                        {plants
                            .filter(plant => plant.category === category)
                            .map(plant => (
                                <div key={plant.id} className="plant-card">
                                    <img src={plant.image} alt={plant.name} />
                                    <h4>{plant.name}</h4>
                                    <p>${plant.price}</p>

                                    <button
                                        onClick={() => dispatch(addItem(plant))}
                                        disabled={isInCart(plant.id)}
                                    >
                                        {isInCart(plant.id) ? "Added" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
