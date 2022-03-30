import React from "react";
import "../styles/data.css";
import convertNumber from "../hooks/convertNumber";

function DataDownList(props) {
  console.log(props);
  let sum = 0;
  const items = props.down[0].items;
  return (
    <div className="cart">
      <div className="my-cart">
        <h3 className="my-cart-title">Meu carrinho</h3>
      </div>
      <ul className="products-list-down">
        {items.map((item, index) => {
          sum += item.sellingPrice;
          return (
            <li className="product">
              <div className="product-img">
                <img
                  alt={`imagem de ${item.name}`}
                  src={item.imageUrl}
                  width="70"
                  className="img"
                />
              </div>
              <div key={index} className="product-info">
                <h6 className="product-name info">{item.name}</h6>
                <h6 className="product-price info">
                  {`R$ ${convertNumber(item.price, '0,00')}`}
                </h6>
                <h6 className="product-selling-price info">
                  {`R$ ${convertNumber(item.sellingPrice, '0,00')}`}
                </h6>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">
        <h4 className="total-txt">Total</h4>
        <h4 className="total-txt">{`R$ ${convertNumber(sum, '0,00')}`}</h4>
      </div>
      <div className="cart-btn">
      <button className="btn-list">Finalizar compra</button>
      </div>
    </div>
  );
}

export default DataDownList;
