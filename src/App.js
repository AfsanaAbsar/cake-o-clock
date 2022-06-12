
import './App.css';
import Header from './pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Footer from './pages/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/blogs" element={<Blogs />}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
