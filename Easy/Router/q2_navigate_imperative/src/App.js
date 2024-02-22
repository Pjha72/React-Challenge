import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DisplayMessage from './components/DisplayMessage';



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/display" element={<DisplayMessage />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}


