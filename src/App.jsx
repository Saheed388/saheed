import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react'; // ✅ import useEffect
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import DataEngineeringPage from './DataEngineeringPage';
import SoftEngineeringPage from './SoftEngineeringPage';
import Footer from './Footer';
import DataEngineeringData from './DataEngineeringData';
import SoftwareEngineerData from './SoftwareDngineerData';
import Certificates from './Certificate';

function App() {
  useEffect(() => {
    // ✅ Inject Botpress scripts when the app loads
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/08/27/13/20250827135251-MZY6QZKY.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      // ✅ Cleanup scripts when component unmounts
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

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
                <Header />
                <DataEngineeringPage />
                <Services />
              </>
            }
          />
          {/* Route for Data Engineering */}
          <Route
            path="/data-engineering"
            element={<DataEngineeringData />}
          />
          {/* Route for Backend Engineering */}
          <Route
            path="/backend-engineering"
            element={<SoftwareEngineerData />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
