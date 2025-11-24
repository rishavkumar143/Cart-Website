import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Categories from "../../components/categories/Categories";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function Section() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cartCount, setCartCount] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved).length : 0;
  });

  const itemsPerPage = 30;

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products?limit=190")
      .then((res) => res.json())
      .then((result) => {
        setData(result.products || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartCount", cartCount.toString());
  }, [cartCount]);

  if (loading) {
    return <h2 className={styles.loading}>Loading...</h2>;
  }

  const filteredData = data
    .filter((item) =>
      selectedCategory === "all" || !selectedCategory
        ? true
        : item.category === selectedCategory
    )
    .sort((a, b) => a.price - b.price);

  const visibleItems = filteredData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(visibleItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = visibleItems.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyInCart = existingCart.some((item) => item.id === product.id);

    let updatedCart;
    if (alreadyInCart) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...existingCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    localStorage.setItem("cartCount", updatedCart.length.toString());
    setCartCount(updatedCart.length);
  };

  const pageNumbers = [];
  const maxVisible = 5;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const endPage = Math.min(totalPages, startPage + maxVisible - 1);
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} cartCount={cartCount} />
      <Categories setSelectedCategory={setSelectedCategory} />

      <div className={styles["main-box"]}>
        {paginatedItems.length === 0 ? (
          <p>No products found for this category.</p>
        ) : (
          paginatedItems.map((item) => (
            <div className={styles.box} key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>

              <div className={styles.Rating}>
                <p>{item.rating.toFixed(1)}</p>
                <div className={styles.stars}>
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

              <div className={styles.Price}>
                <strong>Price:</strong> ${item.price}
              </div>

              <button
                className={styles["cart-btn"]}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <button
            className={styles.pageButton}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            ← Prev
          </button>

          {pageNumbers.map((num) => (
            <button
              key={num}
              className={`${styles.pageButton} ${
                currentPage === num ? styles.activePage : ""
              }`}
              onClick={() => handlePageChange(num)}
            >
              {num}
            </button>
          ))}

          <button
            className={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next →
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Section;
