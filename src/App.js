// import { Component } from "react";
import { useState, useEffect } from 'react';

import CardList from './components/card_list/card_list.component';
import SearchBox from './components/search_box/search_box.component';
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monster Rolodex</h1>

			<SearchBox
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
				required='required'
				// placeholder="Search Monsters"
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};
/*
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>

        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          required="required"
          // placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
*/
export default App;
