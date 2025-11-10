import React from "react";
import styles from "./Categories.module.css";

function Categories({ setSelectedCategory }) {
  const categories = [
    { label: "☰ All", value: "all" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Laptops", value: "laptops" },
    { label: "Mobile Accessories", value: "mobile-accessories" },
    { label: "Beauty", value: "beauty" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Groceries", value: "groceries" },
    { label: "Furniture", value: "furniture" },
    { label: "Home Decoration", value: "home-decoration" },
    { label: "Kitchen Accessories", value: "kitchen-accessories" },
    { label: "Men’s Shirts", value: "mens-shirts" },
    { label: "Men’s Shoes", value: "mens-shoes" },
    { label: "Men’s Watches", value: "mens-watches" },
    { label: "Women’s Dresses", value: "womens-dresses" },
    { label: "Women’s Bags", value: "womens-bags" },
    { label: "Women’s Jewellery", value: "womens-jewellery" },
    { label: "Women’s Shoes", value: "womens-shoes" },
    { label: "Women’s Watches", value: "womens-watches" },
    { label: "Sports Accessories", value: "sports-accessories" },
    { label: "Motorcycles", value: "motorcycle" },
    { label: "Vehicles", value: "vehicle" },
    { label: "Sunglasses", value: "sunglasses" },
    { label: "Tablets", value: "tablets" },
  ];

  return (
    <div className={styles.Nave}>
      <ul>
        {categories.map((cat) => (
          <li key={cat.value} onClick={() => setSelectedCategory(cat.value)}>
            {cat.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
