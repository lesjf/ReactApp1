import React, {Component} from 'react';
import { isEmptyStatement } from '@babel/types';

class App extends Component {
  constructor(){
    super();
      this.state = {
        items: [],
        isLoaded: false,
      }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
         return res.json();
    })
    .then(data => {
      console.log(data)
      this.setState({
        isLoaded: true,
        items: data,
     })
    })
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else{
      return (
      <div className="App">
      <div className="Names">
      <ul>
        {items.map( el =>  {
          return (
         <li key={el.id}>
          Name: {el.name} | Username: {el.Username} | {' '} <a href={`https://S(el.website)`}> Website </a>
        </li>
         )
    })}
           </ul>
         </div>
      </div>
    )
  }
}
}

export default App;
