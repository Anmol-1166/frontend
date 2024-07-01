import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import Statemanagement from './components/Statemanagement';
import TodoList from './components/TodoList';
import ProductList from './components/ProductList';
import Blog from './components/Blog';
import ManageUser from './components/Manageuser';
import { UserProvider } from './components/userContext';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <UserProvider>

        {/* <Link to="/home">Home</Link>
        <Link to="/signup">Sign-Up</Link>
        <Link to="/login">Log-In</Link> */}
        <Navbar />
        
        <Routes>
          <Route element={<Home />} path='home' />
          <Route element={<Home />} path='/' />
          <Route element={<LogIn />} path='login' />
          <Route element={<SignUp />} path='signup' />
          <Route element={<EventHandling />} path='event' />
          <Route element={<Statemanagement />} path='state' />
          <Route element={<TodoList />} path='todo' />
          <Route element={<ProductList />} path='pl' />
          <Route element={<Blog />} path='blog' />
          <Route element={<ManageUser />} path='manage' />
        </Routes>
        </UserProvider>
      </BrowserRouter>
      </div>
  );
}

export default App;
