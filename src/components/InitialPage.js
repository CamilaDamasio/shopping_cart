import React, { useState } from "react";
import DataDownList from "./DataDownList";
import DataUpList from "./DataUpList";
import "../styles/initialPage.css"

function InitialPage(props) {
  const [upList, setUpList] = useState(true);
  const [downList, setDownList] = useState(false);
  
  function eventButtonUp(e) {
    if(downList === true) {
      setDownList(false);
    }
    return setUpList(true);
  }

  function eventButtonDown(e) {
    if(upList === true) {
      setUpList(false);
    }
    return setDownList(true);
  }

  return (
    <div className="main">
      <div className="btns">
        <button type="button" className="btn-initial-page" onClick={(e) => eventButtonUp(e, props)}>Com frete grátis</button>
        <button type="button" className="btn-initial-page" onClick={(e) => eventButtonDown(e, props)}>Sem frete grátis</button>
      </div>
      {upList ? <DataUpList up={props.up} /> : null }
      {downList ? <DataDownList down={props.down} /> : null }
    </div>
  );
}

export default InitialPage;
