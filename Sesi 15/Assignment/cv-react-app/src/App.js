import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Interest from "./component/Interest";
import Certificate from "./component/Certificate";
import Navbar from "./component/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
} from "react-router-dom";

/*
1.halaman minimal ada 6 : home, about, Experience, Skills, Interest, Awards
2.menggunakan basic router, dan Component Structure (diharapkan tanpa menggunakan function inline di return)
3.design glasmorphism, lalu buat dia seperti card
*/

function App() {
  return (
    <Router>
      <div className="w-full h-screen overflow-x-hidden relative">
        <Navbar />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/skills" component={Skills} />
        <Route path="/interest" component={Interest} />
        <Route path="/certificate" component={Certificate} />
        <Redirect from="*" to="/home" />
        {/* <Home />
        <About />
        <Experience />
        <Skills />
        <Interest />
        <Awards /> */}
      </div>
    </Router>
  );
}

export default App;
