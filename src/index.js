import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import ListadeCompras from './ListadeCompras'

var destination = document.querySelector("#container")

ReactDOM.render(
  <div>
      {/* <ShoppingList></ShoppingList> */}
      <ListadeCompras />
  </div>,
  destination
)