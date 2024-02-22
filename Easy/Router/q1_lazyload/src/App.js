import logo from './logo.svg';
import './App.css';
import React from 'react';
import Loading from './components/Loading';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Newsletter from './components/Newsletter';
import Dashboard from './components/Dashboard';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/newsletter">Newsletter</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
          <React.Suspense fallback={<loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </React.Suspense>
        </Router>
      </header>
    </div>
  );
}

export default App;
