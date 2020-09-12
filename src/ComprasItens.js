import React, { Component } from "react";
import FlipMove from "react-flip-move";

export default class ComprasItens extends Component {
  constructor(props) {
    super(props);
    this.criarTarefas = this.criarTarefas.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
  criarTarefas(item) {
    return <li onDoubleClick={()=> this.delete(item.key)} 
    key={item.key}>{item.text} </li>
  };
  render() {
    var comprasEntrada = this.props.entries;
    var listaItens = comprasEntrada.map(this.criarTarefas);

    return(
      <>
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listaItens}
        </FlipMove>
      </ul>
      </>
    );
  }
};