import {
  BrowserRouter as Router,
} from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import NavBarComponent from './components/NavBarComponent';
import RoutesComponent from './components/RoutesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'

const App = () => {
  return (
    <HelmetProvider>
      <Helmet 
        titleTemplate="Vinta | %s"
        defaultTitle="Vinta | Home"
      />
      <Router>
        <div>
          <NavBarComponent />
          <RoutesComponent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
