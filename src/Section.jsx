// // import { useEffect, useState } from "react";
// // import "./Section.css";
// // import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// // function Section() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     fetch("https://fakestoreapi.com/products")
// //       .then((res) => res.json())
// //       .then((result) => setData(result));
// //   }, []);

// //   return (
// //     <div className="main-box">
// //       {data.map((item) => (
// //         <div className="box" key={item.id}>
// //           <img src={item.image} alt={item.title} />
// //           <h3>{item.title}</h3>
// //           <p className="desc">{item.description}</p>
// //           <p>
// //             <strong>Category:</strong> {item.category}
// //           </p>
// //           <div className="Rating">
// //             <p>{item.rating.rate}</p>
// //             <div className="stars">
// //               {[...Array(5)].map((_, i) => {
// //                 const ratingValue = i + 1;
// //                 return (
// //                   <span key={i}>
// //                     {item.rating.rate >= ratingValue ? (
// //                       <FaStar color="#FFD700" />
// //                     ) : item.rating.rate >= ratingValue - 0.5 ? (
// //                       <FaStarHalfAlt color="#FFD700" />
// //                     ) : (
// //                       <FaRegStar color="#FFD700" />
// //                     )}
// //                   </span>
// //                 );
// //               })}
// //             </div>
// //             <p>({item.rating.count})</p>
// //           </div>
// //           <div className="Price">
// //             <strong>Price:</strong> ${item.price}
// //           </div>
// //           <button className="cart-btn">Add to Cart</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Section;

// import { useEffect, useState } from "react";
// import "./Section.css";
// import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// function Section({ selectedCategory }) {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setFilteredData(result);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === "all") {
//       setFilteredData(data);
//     } else {
//       const filtered = data.filter(
//         (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
//       );
//       setFilteredData(filtered);
//     }
//   }, [selectedCategory, data]);

//   return (
//     <div className="main-box">
//       {filteredData.map((item) => (
//         <div className="box" key={item.id}>
//           <img src={item.image} alt={item.title} />
//           <h3>{item.title}</h3>
//           <p className="desc">{item.description}</p>
//           <p><strong>Category:</strong> {item.category}</p>

//           <div className="Rating">
//             <p>{item.rating.rate}</p>
//             <div className="stars">
//               {[...Array(5)].map((_, i) => {
//                 const ratingValue = i + 1;
//                 return (
//                   <span key={i}>
//                     {item.rating.rate >= ratingValue ? (
//                       <FaStar color="#FFD700" />
//                     ) : item.rating.rate >= ratingValue - 0.5 ? (
//                       <FaStarHalfAlt color="#FFD700" />
//                     ) : (
//                       <FaRegStar color="#FFD700" />
//                     )}
//                   </span>
//                 );
//               })}
//             </div>
//             <p>({item.rating.count})</p>
//           </div>

//           <div className="Price">
//             <strong>Price:</strong> ${item.price}
//           </div>

//           <button className="cart-btn">Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Section;

import { useEffect, useState } from "react";
import "./Section.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

function Section({ selectedCategory }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products when category changes
  useEffect(() => {
    setLoading(true);

    // Base URL
    let url = "https://dummyjson.com/products";

    // ✅ If a specific category is selected, fetch category data
    if (selectedCategory && selectedCategory !== "all") {
      url = `https://dummyjson.com/products/category/${selectedCategory}`;
    } else {
      url = "https://dummyjson.com/products?limit=100"; // All products
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        // DummyJSON returns products in "products" key
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
