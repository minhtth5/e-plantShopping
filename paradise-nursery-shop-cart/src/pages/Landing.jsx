import { useNavigate } from "react-router-dom";

function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <div className="landing-text">
                <h1>Welcome to Paradise Nursery</h1>
                <p>Bringing nature closer to your home 🌿</p>
                <button onClick={() => navigate("/products")}>
                    Shop Now
                </button>
            </div>

            <div className="landing-image">
                <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                    alt="Plants"
                />
            </div>
        </div>
    );
}

export default Landing;
