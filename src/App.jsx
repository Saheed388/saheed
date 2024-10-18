import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route from react-router-dom
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import DataEngineeringPage from './DataEngineeringPage'; // Ensure this component exists
import Web3EngineeringPage from './Web3EngineeringPage'; // Ensure this component exists
import Footer from './Footer';
import DataEngineeringData from './DataEngineeringData';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Default route with Services and Header */}
          <Route
            path="/"
            element={
              <>
                <Header /> {/* Display header only on the home page */}
                <Services />
              </>
            }
          />
          {/* Route for Data Engineering, without Header */}
          <Route
            path="/data-engineering"
            element={
              <>
                <DataEngineeringPage /> {/* Only Navbar, DataEngineeringPage, and Footer */}
                <DataEngineeringData/>
              </>
            }
          />
          {/* Route for Web3 Engineering, without Header */}
          <Route
            path="/web3-engineering"
            element={
              <>
                <Web3EngineeringPage />
              </>
            }
          />
        </Routes>
        <Footer /> {/* Footer will always be displayed */}
      </div>
    </Router>
  );
}

export default App;
