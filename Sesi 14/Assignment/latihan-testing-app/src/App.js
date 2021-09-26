import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
// import './App.css';
import Home from './component/Home';
import UserList from './component/UserList';

function App() {
  return (
    <>
      <Router>
        <header className="container max-w-full p-5 text-xl">
          <nav>
            <h2>Testing Example</h2>
          </nav>
        </header>
        <div className="container w-full">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/UserList">
              <UserList/>
            </Route>
          </Switch>
        </div>
        <footer className="text-left py-5 border-t-4">
              <div className="container">
                  <p className="mb-1">Muhammad Ramadhan Sangisda Alam &copy; 2021</p>
              </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
