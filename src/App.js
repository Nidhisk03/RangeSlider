import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import QuestionsPage from './Components/QuestionsPage';
import StartPage from './Components/StartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
