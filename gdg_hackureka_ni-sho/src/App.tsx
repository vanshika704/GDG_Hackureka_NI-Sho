import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from "./pages/splash";
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import GlobalAudio from './components/globalaudio';

// Navbar ko control karne ke liye ek chota internal component
const NavbarWrapper = () => {
  const location = useLocation();
  
  // Agar path "/" (Splash) hai, toh kuch mat dikhao
  if (location.pathname === "/") {
    return null;
  }

  return <Navbar />;
};

function App() {
  return (
    <BrowserRouter>
      {/* Navbar directly rakhne ki jagah Wrapper rakha */}
      <NavbarWrapper />
      
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      <GlobalAudio />
    </BrowserRouter>
    
  );
}

export default App;