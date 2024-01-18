import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Products from './components/Products';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import User from './components/User';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';


function App() {
  const navigate=useNavigate();
  const NavigateToAbout=()=>{
    navigate('/about');
  }
  //condition based navigation
  const NavigateToWhere=()=>{
    let name ='kajal';
    if (name == 'kajal') {
      navigate('/about')
    } else {
      navigate('/contact')
    }
  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} >
        <Route path='shirts' element={<Shirts/>}/>

        <Route path='jeans' element={<Jeans/>}/>
        </Route>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/users' element={<User/>} />
      <Route path='/users/:id' element={<UserDetails/>} />
      <Route path='/users/admin' element={<Admin/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    <button onClick={()=>navigate('/')}>Home</button>&nbsp;
    <button onClick={()=>NavigateToAbout()}>About</button>&nbsp;
    <button onClick={()=>navigate('/contact')}>Contact</button>&nbsp;
    <button onClick={()=>NavigateToWhere()}>Click Me</button>&nbsp;
    <button onClick={()=>navigate(-1)}>Back</button>
    </>
  );
}

export default App;
