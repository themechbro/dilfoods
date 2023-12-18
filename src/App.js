import { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import Product from './product';



class App extends Component {
  constructor(props){
    super(props);
    this.state={cartLength:99}
  }

  render(){
    return (
      <div className="App">
      <Navbar cartLength={this.state.cartLength}/>
      <Product/>
      </div>
    );
  }
  
}

export default App;
