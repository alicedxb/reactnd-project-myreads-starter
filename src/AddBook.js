import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const AddBook = () => {
	return (
		<div className="open-search">
			<Link to="/search" >Add a book</Link>
		</div>
	);
}

export default AddBook;
