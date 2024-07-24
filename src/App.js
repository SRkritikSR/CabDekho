import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SearchForm from './components/SearchForm';
import HotelBanner from './components/HotelBanner';
import Random from './Random';
import { Route, Routes } from 'react-router-dom';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/resultPage" element={<ResultPage/>}/>
    </Routes>
  );
}

export default App;
