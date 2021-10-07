import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Todos from "./components/Todos";
import About from "./components/About";
import { useState } from "react";

/*
  ketika login tombol menjadi logout
  ketika telah logout tombol menjadi login dan mengarah ke page login
*/

function App() {
  const [login, setIslogin] = useState(false);
  console.log(login);

  return (
    <>
      <Router>
        <Header isLogin={login} setLogin={setIslogin} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/login">
              <Login onLoginChange={setIslogin} />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
