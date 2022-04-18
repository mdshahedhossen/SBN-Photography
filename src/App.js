// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Blogs from './Pages/Blogs/Blogs';
import ServicesDetails from './Pages/ServicesDetails/ServicesDetails';
import ReqireAuth from './Pages/ReqireAuth/ReqireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>        
        <Route path='/home' element={<Home></Home>}></Route> 
        <Route path='/gallery' element={<Gallery></Gallery>}></Route> 
        <Route path='/about' element={<About></About>}></Route> 
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceid' element={
          <ReqireAuth>
            <ServicesDetails></ServicesDetails>
          </ReqireAuth>
        }></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
