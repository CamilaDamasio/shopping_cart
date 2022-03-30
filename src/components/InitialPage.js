import React, { useState } from "react";
import DataDownList from "./DataDownList";
import DataUpList from "./DataUpList";
import "../styles/initialPage.css"

function InitialPage(props) {
  const [upList, setUpList] = useState(false);
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
        <button type="button" onClick={(e) => eventButtonUp(e, props)}>Up</button>
        <button type="button" onClick={(e) => eventButtonDown(e, props)}>Down</button>
      </div>
      {upList ? <DataUpList up={props.up} /> : null }
      {downList ? <DataDownList down={props.down} /> : null }
    </div>
  );
}

export default InitialPage;
