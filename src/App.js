import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch, Route,Link} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Shop from './Components/Home/Shop/Shop';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import ShopDetails from './Components/Home/ShopDetails/ShopDetails';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Reviews from './Components/Home/Reviews/Reviews';


function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
      <Route exact path="/">
            <Home></Home>
            </Route>
          <Route path="/home">
            <Home></Home> 
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route  path="/shopdetails/:shopId">
        <ShopDetails></ShopDetails>
      </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
           <Register></Register>
          </Route>
          <Route path="/review">
           <Reviews></Reviews>
          </Route>
          <Route path="/dashbord">
           <Dashboard></Dashboard>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
