import ItemCardSmall from "./ItemCardSmall";
import items from "./products.js";
import "./Snacks.css"


const Snacks = () => {
    const productComponents = items.map((item) => {
        return (
          <ItemCardSmall
            key={item.id}
            name={item.name}
            price={item.cost}
          />
        );
      });
      return <div className="products">
        
        <div className="product-grid">{productComponents}</div>
        </div>;
  }
  
export default Snacks;