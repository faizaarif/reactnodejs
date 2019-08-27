import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import data from  "./data";
import Pic from "./Pics/Pics"
import Main from "./Main/Main"
import  productData from "./producte"
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
        data:data,
        product: productData
    };
}
 
render (){
  
     return <div className="app">

  <Nav nav={this.state.data[0].nav}/>
  <Header header={this.state.data[0].header}/>
  <Pic products={this.state.product[0].products} side={this.state.data[0].side_bar} />
  <Main/>
  </div>
}
};
export default App;