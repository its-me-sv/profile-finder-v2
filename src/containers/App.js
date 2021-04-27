// Constants and Main Modules
import React, {Component} from 'react';
import {
  DUMMY_API_URL,
  DUMMY_API_KEY
} from '../constants.js';

// Style Sheets
import './App.css';

// Components
import {CardList} from '../components/card-list/card-list.component';
import {SearchBox} from '../components/search-box/search-box.component';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch(DUMMY_API_URL, {
      headers: {
        'app-id': DUMMY_API_KEY
      } 
    })
    .then(response => response.json())
    .then(({data}) => this.setState({monsters:data}))
    .catch(console.log);
  }

  /**
 * updateSearchField takes event object as argument.
 * Doesn't return any value.
 * Updates the searchField of state with event.target.value
 */
  updateSearchField = event => {
    this.setState({searchField: event.target.value});
  }

  /**
 * filteredBots doesn't take any argument.
 * The return value is an array in all cases.
 * Filters monsters whose firstName property
 * includes string from searchField
 */
  filteredBots = () => {
    const {monsters, searchField} = this.state;
    return monsters.filter(monster => 
      monster
      .firstName
      .toLowerCase()
      .includes(searchField.toLowerCase()));
  }

  render(){
    return (
      <div className="App">
        <h1 className="title">RoboFriends v2</h1>
        <SearchBox
          placeholderText = "Search Users"
          handleChange = {this.updateSearchField}
        />
        {
          this.state.monsters.length > 0 
            ? <CardList monsters={this.filteredBots()} />
          : <h1>Fetching Data ...</h1>
        }
      </div>
    );
  }
}

export default App;