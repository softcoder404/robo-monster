import './App.css';
import React from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-field/search.component';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then(response => this.setState({monsters: response}))
    .catch(err => console.log(err));
  };

  handleOnChange = e => this.setState({searchField: e.target.value});
  handleSearch = () => this.state.monsters.filter( monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
     
  
  render(){
   return( 
   <div className="App">
     <h1> Robo Monster</h1>
     <SearchBox hint='search monsters' onChange={this.handleOnChange} />
     <CardList monsters={this.handleSearch()} />
   </div>);
  }
}
export default App;
