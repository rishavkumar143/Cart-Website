import { useEffect, useState } from 'react';
import './Section.css';

function Section() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div className="main-box">
      {data.map((item) => (
        <div className="box" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p><strong>Price:</strong> ${item.price}</p>
          <p className="desc">{item.description}</p>
          <p><strong>Category:</strong> {item.category}</p>
          <button className="cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Section;
