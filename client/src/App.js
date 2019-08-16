import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
    <div>
      <SavedList list={savedList} />
        <div>      
          <Route path="/" exact component={MovieList} />
          <Route path="/movies/:id" exact component={Movie} />
        </div>
    </div>
    </Router>
  );
};



export default App;
