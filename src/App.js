import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link} from "react-router-dom";
import Pedidos from "./components/Pedidos";
import Navbar from "./components/Navbar";
import Reportes from "./components/Reportes";
import Inicio from "./components/Inicio";
import StyleInicio from "./components/css/StyleInicio.css";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        
        {/*<Navbar />*/}
        <Switch>
        <Route exact path="/pedidos" component={Pedidos}/>
          <Route exact path="/reportes" component={Reportes}/>
          <Route exact path="/" component={Inicio}>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;