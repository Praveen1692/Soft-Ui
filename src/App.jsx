import {} from "react";

import HomePage from "./Components/HomePage/HomePage";
import Dashboard from "./Pages/Dashboard/Dashboars";
import Error from "./Pages/Error/Error";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HomePage />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
