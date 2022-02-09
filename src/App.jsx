import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <h1>Search SpaceX Launches</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launcheDetails/:id" element={<Details />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
