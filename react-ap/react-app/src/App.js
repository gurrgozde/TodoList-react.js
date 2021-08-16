
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home.js/Home';
import User from './components/User/User';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home}></Route>
          <Route exact path="/users/:userId" component={User}></Route>
          <Route exact path="/login" component={Login}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
