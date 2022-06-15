import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards/Cards';
import CardDetails from './components/CardDetails/CardDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<Cards/>} />
      <Route path="/card/details" element={<CardDetails />} />
    </Routes>
    </>
  );
}

export default App;
