import "./Navebar.css";
 
function Navebar({ onCategorySelect }) {
  return (
    <div className="Nave">
      <ul type="none">
        <li onClick={() => onCategorySelect("all")}>☰ All</li>

        <li onClick={() => onCategorySelect("smartphones")}>Smartphones</li>
        <li onClick={() => onCategorySelect("laptops")}>Laptops</li>
        <li onClick={() => onCategorySelect("mobile-accessories")}>Mobile Accessories</li>

        <li onClick={() => onCategorySelect("beauty")}>Beauty</li>
        <li onClick={() => onCategorySelect("fragrances")}>Fragrances</li>
        <li onClick={() => onCategorySelect("groceries")}>Groceries</li>
        <li onClick={() => onCategorySelect("furniture")}>Furniture</li>

        <li onClick={() => onCategorySelect("home-decoration")}>Home Decoration</li>
        <li onClick={() => onCategorySelect("kitchen-accessories")}>Kitchen Accessories</li>

        <li onClick={() => onCategorySelect("mens-shirts")}>Men’s Shirts</li>
        <li onClick={() => onCategorySelect("mens-shoes")}>Men’s Shoes</li>
        <li onClick={() => onCategorySelect("mens-watches")}>Men’s Watches</li>

        <li onClick={() => onCategorySelect("womens-dresses")}>Women’s Dresses</li>
        <li onClick={() => onCategorySelect("womens-bags")}>Women’s Bags</li>
        <li onClick={() => onCategorySelect("womens-jewellery")}>Women’s Jewellery</li>
        <li onClick={() => onCategorySelect("womens-shoes")}>Women’s Shoes</li>
        <li onClick={() => onCategorySelect("womens-watches")}>Women’s Watches</li>

        <li onClick={() => onCategorySelect("sports-accessories")}>Sports Accessories</li>
        <li onClick={() => onCategorySelect("motorcycle")}>Motorcycles</li>
        <li onClick={() => onCategorySelect("vehicle")}>Vehicles</li>
        <li onClick={() => onCategorySelect("sunglasses")}>Sunglasses</li>
        <li onClick={() => onCategorySelect("tablets")}>Tablets</li>
      </ul>
    </div>
  );
}

export default Navebar;
