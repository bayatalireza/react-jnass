function Pizza({pizza}) {
 
  // if(pizza.soldOut){
  //   return null
  // }
  return (
    <li className={`pizza ${pizza.soldOut ? "soldOut" : ""}`}>
      <img src={pizza.photoName} alt="pizza" srcSet="" />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span>{pizza.soldOut ? "SOLD OUT" : pizza.price }</span>
    </li>
  );
}

export default Pizza;
