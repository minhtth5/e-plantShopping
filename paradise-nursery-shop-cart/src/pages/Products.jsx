import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";

function Products() {
    const categories = [...new Set(plants.map(p => p.category))];

    return (
        <div className="products-container">
            <h2>Our Plants</h2>

            {categories.map(category => (
                <div key={category}>
                    <h3 className="category-title">{category}</h3>
                    <div className="card-grid">
                        {plants
                            .filter(p => p.category === category)
                            .map(plant => (
                                <PlantCard key={plant.id} plant={plant} />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;
