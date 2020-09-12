import React, { Component } from 'react'
import ComprasItens from './ComprasItens'
import './ListadeCompras.css'

export default class ListadeCompras extends Component {
  constructor(props){
    super(props);
    this.adicionaItem = this.adicionaItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      itens: []
    };
  }
  adicionaItem(e){
    if (this._inputElement.value !== ""){
      var novoItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState)=>{return {
        itens: prevState.itens.concat(novoItem)
      };
    });
    this._inputElement.value = "";
    }
    console.log(this.state.itens);
    e.preventDefault()
  }
  deleteItem(key){
    var filteredItens = this.state.itens.filter(function(item){
      return (item.key !== key);
    });
    this.setState({
      itens: filteredItens
    });
  }
  render() {
    return (
      <div className="ListadeComprasMain">
        <div className="header">
          <form onSubmit={this.adicionaItem}>
            <input ref={(a)=> this._inputElement = a} placeholder="Nome do Item"/>
            <button type="submit">Adiciona</button>
          </form>
        </div>
        <ComprasItens entries={this.state.itens}
          delete={this.deleteItem}/>
      </div>
    );
  }
}
