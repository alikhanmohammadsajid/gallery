import './App.css';
import Home from './Components/Home/Home';
import Nabvar from './Components/Navbar/Nabvar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Banner from './Components/Home/Banner';



function App() {
  return (
    <Router>
      <Nabvar />
      <Banner></Banner>
      <Switch>
        <Route exact path="/"><Home></Home></Route>

      </Switch>
    </Router>
  );
}

export default App;
