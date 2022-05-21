import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navegation from './Pages/Shared/Navegation/Navegation';
import AdminPanel from './Pages/AdminPanel/AdminPanel';

function App() {
  return (
    <>
    <Router>
     
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route  path="/home">
         <Home></Home>
       </Route>
       <Route path='/adminpalel'>
        <AdminPanel></AdminPanel>
       </Route>
     </Switch>
    </Router>
    </>
  );
}

export default App;
