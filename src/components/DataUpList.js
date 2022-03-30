import React from "react";
import "../styles/data.css";

function converter(num, format) {
  let result = '';
  let numToString = String(num);
  let indexAlt = 0;
  for (let index = 0; index < format.length; index += 1) {
    if (Number.isInteger(parseInt(format[index])) === false) {
      result += format[index];
    } else {
      result += numToString[indexAlt];
      indexAlt += 1;
    }
  }
  return result;
}

function DataUpList(props) {
  let sum = 0;
  const items = props.up[0].items;
  return (
    <div className="cart">
      <div className="my-cart">
        <h3 className="my-cart-title">Meu carrinho</h3>
      </div>
      <ul className="products-list-up">
        {items.map((item, index) => {
          sum += item.sellingPrice;
          console.log(sum);
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
                  {`R$ ${converter(item.price, '0,00')}`}
                </h6>
                <h6 className="product-selling-price info">
                  {`R$ ${converter(item.sellingPrice, '0,00')}`}
                </h6>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="total">
        <h4 className="total-txt">Total</h4>
        <h4 className="total-txt">{`R$ ${converter(sum, '00,00')}`}</h4>
      </div>
      <div className="free-shipping">
        <p>Parabéns, sua compra tem frete grátis!</p>
      </div>
      <div className="cart-btn">
      <button className="btn">Finalizar compra</button>
      </div>
    </div>
  );
}

export default DataUpList;