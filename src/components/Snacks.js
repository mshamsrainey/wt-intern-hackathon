import ItemCardSmall from "./ItemCardSmall";
import items from "./products.js";
import "./Snacks.css"


const Snacks = () => {
    const productComponents = items.map((item) => {
        return (
          <ItemCardSmall
            key={item.id}
            name={item.name}
            price={item.price}
          />
        );
      });
      return <div className="products">
        <h1>Snacks</h1>
        <div className="product-grid">{productComponents}</div>
        </div>;
  }
  
export default Snacks;