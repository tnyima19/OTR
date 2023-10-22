import {Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
function App() {
  return (
      <Routes >
        <Route path="login" element={<Login />}  />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    
      
  );
}

export default App;
