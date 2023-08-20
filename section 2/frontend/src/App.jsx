import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import ToDoList from './components/ToDoList';
import ProductList from './components/ProductList';
import  ManageUser from './components/ManageUser';


function App() {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/home">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link> */}

        <Navbar />

        <Routes>
          <Route element={ <Home /> } path='/' />
          <Route element={ <Home /> } path='home' />
          <Route element={ <Signup /> } path='signup' />
          <Route element={ <Login /> } path='login' />
          <Route element={ <EventHandling/> } path='event' />
          <Route element={ <StateManagement/> } path='state' />
          <Route element={ <ToDoList/> } path='todo' />
          <Route element={ <ProductList/> } path='list' />
          <Route element={ <ManageUser/> } path='manage' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
