import "./store.css";

function ProdCard({ product }) {

  return (
    <div className="productCard">
      <div className="imageBox">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="cardContent">
        <span className="category">{product.category}</span>
        <h3 className="title">{product.title}</h3>

        <p className="description">
          {product.description.slice(0, 80)}...
        </p>

        <div className="rating">
          ⭐ {product.rating.rate} <span>({product.rating.count})</span>
        </div>

        <div className="cardFooter">
          <span className="price">${product.price}</span>
        </div>
      </div>
    </div>
  );
}

export default ProdCard;
