
import './App.css';
import Header from './pages/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import REquireAuth from './pages/RequireAuth/REquireAuth';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={
          <REquireAuth>
            <About></About>
          </REquireAuth>
        }></Route>

        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
