import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Layout from './pages/home_v2/Layout';
import Main from './pages/home_v2/main/Main';
import Work from './pages/home_v2/work/Work';
import About from './pages/home_v2/about/About';
import Portfolio from './pages/home_v2/portfolio/Portfolio';
import Contact from './pages/home_v2/contact/Contact';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>} /> 
      </Route>     
      <Route path="/v2/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="work" element={<Work/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
