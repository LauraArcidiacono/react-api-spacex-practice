import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launchDetails/:id" element={<Details />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
