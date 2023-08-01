import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      
      <BrowserRouter>

        {/* <Link to="/home">Home</Link>
        <Link to="/signup">Sign-Up</Link>
        <Link to="/login">Log-In</Link> */}
        <Navbar />
        
        <Routes>
          <Route element={<Home />} path='home' />
          <Route element={<Home />} path='/' />
          <Route element={<LogIn />} path='login' />
          <Route element={<SignUp />} path='signup' />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
