// import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom'; // npm i react-router-dom

import './App.css';
import WebRoutes from './components/webroutes.component';

function App() {
  return (
    <>
      <Router>
        <WebRoutes/> {/* to create route links for websites */}
      </Router>
    </>
  );
}

export default App;
