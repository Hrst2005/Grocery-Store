import { Routes, Route } from 'react-router';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import Cart from '../pages/Cart.jsx';
import '../style/App.css';
import CartBar from '../components/CartBar.jsx';

function App() {
  return (
    <>
    <Navbar />
    <div className="animate-background"></div>

    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='Cart' element={<Cart />} />
    </Routes>
      <CartBar />
    </>
  );
}

export default App;

