import ItemCardSmall from "./ItemCardSmall";
import items from "./products.js";

function Grocery() {
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
        <h1>Grocery</h1>
        <div className="product-grid">{productComponents}</div>
        </div>;
  }
  
  export default Grocery;