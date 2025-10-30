import { useEffect, useState } from "react";
import "./Section.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function Section({ selectedCategory }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let url = "https://dummyjson.com/products";

    if (selectedCategory && selectedCategory !== "all") {
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    } else {
      url = "https://dummyjson.com/products?limit=100";
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, [selectedCategory]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="main-box">
      {data.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        data.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <h3>{item.title}</h3>
            <p className="desc">{item.description}</p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>

            <div className="Rating">
              <p>{item.rating}</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => {
                  const ratingValue = i + 1;
                  return (
                    <span key={i}>
                      {item.rating >= ratingValue ? (
                        <FaStar color="#FFD700" />
                      ) : item.rating >= ratingValue - 0.5 ? (
                        <FaStarHalfAlt color="#FFD700" />
                      ) : (
                        <FaRegStar color="#FFD700" />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="Price">
              <strong>Price:</strong> ${item.price}
            </div>

            <button className="cart-btn">Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Section;
