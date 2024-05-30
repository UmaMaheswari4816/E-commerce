import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Footer from './customer/components/Footer/Footer';
import MenProducts from './customer/components/Products/MenProducts';
import CartPage from './customer/components/Cart/CartPage';
import KidsProducts from './customer/components/Products/KidsProducts';
import RegisterF from './customer/components/RegisterLogin/RegisterF';
import LoginF from './customer/components/RegisterLogin/LoginF';
import WomenProducts from './customer/components/Products/WomenProducts';
import AddressPage from './customer/components/Address/AddressPage';
import UserProfile from './customer/components/Profile/UserProfile';

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/kids" element={<KidsProducts />} />
          <Route path="/login" element={<LoginF />} />
          <Route path="/signup" element={<RegisterF />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/address" element={<AddressPage />} />

    
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;


