// import { Component } from "react";
import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card_list/card_list.component';
import SearchBox from './components/search_box/search_box.component';
import './App.css';

import { getData } from './utils/data.utils'

export type Monster = {
  id: string;
  name: string;
  email: string;
  required: boolean;
}


const App = () => {
	const [searchField, setSearchField] = useState(''); // [value, setValue]
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users);
    }

    fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monster Rolodex</h1>

			<SearchBox
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
				required={true}
				// placeholder="Search Monsters"
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
