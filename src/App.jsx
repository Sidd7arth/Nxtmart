import Login from "./login"
import Home from "./home"
import Cart from "./cart"
import ErrorPage from "./components/errorpage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import PaymentPage from "./components/paymentpage";


function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/paymentpage" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;