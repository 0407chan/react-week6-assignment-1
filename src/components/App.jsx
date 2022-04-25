import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

import RestaurantsPage from '../Pages/RestaurantsPage';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import NotFoundPage from '../Pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
