import React from "react";

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

function DataDownLibrary(props) {
  console.log("Down: ", props.down[0].items);
  console.log("Price: ", props.down[0].items[0].price);
  const items = props.down[0].items;
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div>
            <img
              alt={`imagem de ${item.name}`}
              src={item.imageUrl}
              width="200"
            />
            <div key={index}>
              <h5>{item.name}</h5>
              <h6>{converterValor(String(item.price))}</h6>
              <h6>{converterValor(String(item.sellingPrice))}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataDownLibrary;
