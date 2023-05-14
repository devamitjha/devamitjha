import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>} /> 
      </Route>
    </Routes>
  );
}

export default App;
