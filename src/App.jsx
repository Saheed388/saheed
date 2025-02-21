import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route from react-router-dom
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import DataEngineeringPage from './DataEngineeringPage'; // Ensure this component exists
import SoftEngineeringPage from './SoftEngineeringPage'; // Ensure this component exists
import Footer from './Footer';
import DataEngineeringData from './DataEngineeringData';
import SoftwareEngineerData from './SoftwareDngineerData';

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
            path="/backend-engineering"
            element={
              <>
                <DataEngineeringPage  />
                <SoftwareEngineerData/>
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
