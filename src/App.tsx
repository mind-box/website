import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Private from './pages/Private';

import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="private" element={<Private />} />
    </Route>
  </Routes>
  );
}

export default App;
