import {Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Poetry from './Poetry/Poetry';
import Home from './Home';
import Navbar from './Navbar/Navbar';
import PostPoetryContainer from './Container/PostPoetryContainer';

function App() {
  return (
    <>
    <Navbar />
    <div>
      <Routes >
        <Route path="login" element={<Login />}  />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/Poetry" element={<Poetry />} />
        <Route path="/postPoetry" element={<PostPoetryContainer />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
    </>
      
  );
}

export default App;
