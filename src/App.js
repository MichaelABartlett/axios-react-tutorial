import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

let PUNK_API = 'https://api.punkapi.com/v2/beers'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      arrayOfBeer: [],
    }
  }



  componentDidMount() {
    //fetch(PUNK_API)
    //.then((response) => response.json())
    //.then((data) => this.setState({
      //beers: data
    //}));
    axios.get('https://api.punkapi.com/v2/beers')
      .then( res => {
        const arrayOfBeer = res.data
        this.setState({ arrayOfBeer })
    })
  }

//componentDidUpdate(){
//  console.log("This is from state", this.state.beer)
//}


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <li key={index} >{beer.name}</li>
          )
        })}</ol>
        </header>
      </div>
    );
  }
}

export default App;
