import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Catalog from './components/Catalog';
// import PickMovie from './components/PickMovie';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/receipts" element={<Receipt/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
