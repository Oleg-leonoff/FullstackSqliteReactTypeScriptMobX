import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
          <Header />
      </Router>
      <div className="App">
      </div>
      </>
  );
}

export default App;
