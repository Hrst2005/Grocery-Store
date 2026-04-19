import { Routes, Route } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import Cart from '../pages/Cart.jsx';

function App() {
  return (
    <>
    <Navbar />
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='Cart' element={<Cart />} />
    </Routes>
    </>
  );
}

export default App;

