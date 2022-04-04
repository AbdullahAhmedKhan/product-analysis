import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Review from './Components/Home/Review/Review';
import Dashboard from './Components/Home/Dashboard/Dashboard';
import About from './Components/Home/About/About';
import NotFound from './Components/Home/NotFound/NotFound';
import Blogs from './Components/Home/Blogs/Blogs';

function App() {
  return (
    <div className="App mt-5 pt-5">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
