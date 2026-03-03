import { plants } from "../data/plants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {
    const dispatch = useDispatch();

    const categories = [...new Set(plants.map(p => p.category))];

    return (
        <div className="products-container">
            {categories.map(category => (
                <div key={category}>
                    <h2>{category}</h2>

                    <div className="card-grid">
                        {plants
                            .filter(p => p.category === category)
                            .map(plant => (
                                <div key={plant.id} className="plant-card">
                                    <img src={plant.image} alt={plant.name} />
                                    <h4>{plant.name}</h4>
                                    <p>${plant.price}</p>

                                    <button
                                        onClick={() => dispatch(addItem(plant))}
                                    >
                                        Add to Cart
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
