import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu"
import Home from './pages/Home'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import About from './pages/About';
import Contact from "./pages/Contact";




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
         
        </Switch>
         <Footer/>
      </Router>
    </div>
  );
}

export default App; 