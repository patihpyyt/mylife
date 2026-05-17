import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import PreeLoder from './components/PreeLoder.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreeLoder/>
    <div className="contaainer mx-auto px-7">
   <Navbar/>
   <App />
   <Footer/>
    </div>
    
      
    
  </StrictMode>
)
