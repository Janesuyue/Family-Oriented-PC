import React,{Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './views/Home';
import Login from './views/Login/Login';

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <Home/>
        <Login/>
      </div>
    )
  }
}

export default App;
