import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import BookList from './BookList';
import NewBook from './NewBook';
import Categories from '../pages/Categories';


function App() {
  return (
    <>
  <Nav />
  <Switch>
        <Route exact path="/">
  <BookList />
  <NewBook />
  </Route>
  <Route path="/categories">
          <Categories />
        </Route>
  </Switch>
  </>
  );
}

export default App;
