import React, { Component } from 'react';
// import Jumbotran from '../components/Jumbotran';
// import Container from '../components/Container';
// import Row from '../components/Row';
// import Column from '../components/Column';
// import Card from '../components/Card';
import { searchGoogleBooks, saveBook, getSaveBook } from '../utils/API';

class Search extends Component {
 state = {
     searchTerm:'',
     bookList: [],
     saveBookIds: [],
     error: null
 }

 handleInputChange = event => {
     const { name, value } = event.target;
     this.state({
         [name]: value
     });
     };

 handleFormSubmit = event => {
     event.preventDefault()
     
    if (this.state.searchTerm === ''){
        return this.setState({error: 'Please put in title.'})
    }
 }    
 }

export default Search;

