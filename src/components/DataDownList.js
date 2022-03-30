import React from "react";
import "../styles/data.css";

function converterValor(value) {
  let count = 0;
  let result;
  for (let number of value) {
    if (count === 0) {
      result = number + ",";
      count += 1;
    } else {
      result += number;
    }
  }
  return `R$ ${result}`;
}

function DataDownList(props) {
  const items = props.down[0].items;
  return (
    <div className="cart">
      <div className="my-cart">
        <h3 className="my-cart-title">Meu carrinho</h3>
      </div>
      <div className="products-list">
        {items.map((item, index) => {
          return (
            <div className="product">
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
                  {converterValor(String(item.price))}
                </h6>
                <h6 className="product-selling-price info">
                  {converterValor(String(item.sellingPrice))}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h4 className="total-txt">Total</h4>
        <h4 className="total-txt">R$</h4>
      </div>
      <div className="cart-btn">
      <button className="btn">Finalizar compra</button>
      </div>
    </div>
  );
}

export default DataDownList;
