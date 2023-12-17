import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrincipalPage from './pages/PrincipalPage';
import ResultPage from './pages/ResultPage';
import FormPage from './pages/FormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalPage/>} />
        <Route path="/result" element={<ResultPage/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </Router>
  );
}

export default App;