import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import '../index.css'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </CartProvider>
);
