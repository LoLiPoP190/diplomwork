import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty
    })
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug}>{product.name}</Link>
        <input
          type="number"
          value={cart[product.name]}
          min={1}
          onChange={(event) => onQuantityChange(product, +event.target.value)} />
        <span>{(cart[product.id] * product.price).toFixed(2)} $</span>
        <i class="fa-solid fa-xmark" onClick={() => onItemRemove(product)} />
      </div>
    ));

  return (
    <div className="CartList">
      {output}
    </div>
  )
}