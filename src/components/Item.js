import { React, useState } from "react";

function Item({ name, category }) {

  const [ isItemInCart, setIsItemInCart ] = useState(false);

  const handleClick = () => {
    setIsItemInCart(prev => !prev);
  };
  
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={ isItemInCart ? "in-cart" : ""} onClick={ handleClick }>{ isItemInCart ? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
