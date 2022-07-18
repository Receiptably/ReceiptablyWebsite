import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import NavBarComponent from './components/NavBarComponent';
import RoutesComponent from './components/RoutesComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import FooterComponent from './components/FooterComponent';

const App = () => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate='Receiptably | %s'
        defaultTitle='Receiptably | Home'
      />
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBarComponent />
          <RoutesComponent />
          <FooterComponent />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
