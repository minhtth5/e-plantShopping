import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useState } from "react";

function PlantCard({ plant }) {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        dispatch(addToCart(plant));
        setAdded(true);
    };

    return (
        <div className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h4>{plant.name}</h4>
            <p>{plant.description}</p>
            <p><strong>${plant.price}</strong></p>
            <button onClick={handleAdd} disabled={added}>
                {added ? "Added" : "Add to Cart"}
            </button>
        </div>
    );
}

export default PlantCard;
