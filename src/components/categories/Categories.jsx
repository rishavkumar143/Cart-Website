import "./Categories.css";
 
function Categories({ setSelectedCategory }) {
  return (
    <div className="Nave">
      <ul type="none">
        <li onClick={() => setSelectedCategory("all")}>☰ All</li>

        <li onClick={() => setSelectedCategory("smartphones")}>Smartphones</li>
        <li onClick={() => setSelectedCategory("laptops")}>Laptops</li>
        <li onClick={() => setSelectedCategory("mobile-accessories")}>Mobile Accessories</li>

        <li onClick={() => setSelectedCategory("beauty")}>Beauty</li>
        <li onClick={() => setSelectedCategory("fragrances")}>Fragrances</li>
        <li onClick={() => setSelectedCategory("groceries")}>Groceries</li>
        <li onClick={() => setSelectedCategory("furniture")}>Furniture</li>

        <li onClick={() => setSelectedCategory("home-decoration")}>Home Decoration</li>
        <li onClick={() => setSelectedCategory("kitchen-accessories")}>Kitchen Accessories</li>

        <li onClick={() => setSelectedCategory("mens-shirts")}>Men’s Shirts</li>
        <li onClick={() => setSelectedCategory("mens-shoes")}>Men’s Shoes</li>
        <li onClick={() => setSelectedCategory("mens-watches")}>Men’s Watches</li>

        <li onClick={() => setSelectedCategory("womens-dresses")}>Women’s Dresses</li>
        <li onClick={() => setSelectedCategory("womens-bags")}>Women’s Bags</li>
        <li onClick={() => setSelectedCategory("womens-jewellery")}>Women’s Jewellery</li>
        <li onClick={() => setSelectedCategory("womens-shoes")}>Women’s Shoes</li>
        <li onClick={() => setSelectedCategory("womens-watches")}>Women’s Watches</li>

        <li onClick={() => setSelectedCategory("sports-accessories")}>Sports Accessories</li>
        <li onClick={() => setSelectedCategory("motorcycle")}>Motorcycles</li>
        <li onClick={() => setSelectedCategory("vehicle")}>Vehicles</li>
        <li onClick={() => setSelectedCategory("sunglasses")}>Sunglasses</li>
        <li onClick={() => setSelectedCategory("tablets")}>Tablets</li>
      </ul>
    </div>
  );
}

export default Categories;
