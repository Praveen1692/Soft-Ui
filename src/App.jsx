import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Dashboard from "./Pages/Dashboard/Dashboars";
import Error from "./Pages/Error/Error";
import Layout from "./Components/Layout/Layout";
import Chart from "./Components/Charts/Chart";
import Automotive from "./Components/Automotive/Automotive";
import SmartHome from "./Components/Smart Home/SmartHome"


function App() {
  return (
    <>
     <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/automotive" element={<Automotive />} />
          <Route path="/smart-home" element={<SmartHome />} />

          <Route path="/error" element={<Error />} />
        </Routes>
      </Layout>
    </Router> 
   
      
      
    </>
  );
}

export default App;
