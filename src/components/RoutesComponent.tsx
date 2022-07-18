import { Routes, Route } from 'react-router-dom';
// CORE PAGES =====================
import HomePage from '../pages/HomePage';
import RoadmapPage from '../pages/RoadmapPage';
import FAQPage from '../pages/FAQPage';
import LicensePage from '../pages/LicensePage';
import ChangelogPage from '../pages/ChangelogPage';
// UTILITY PAGES ===================
import NotFoundPage from '../pages/NotFoundPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Home' element={<HomePage />} />
      <Route path='/Roadmap' element={<RoadmapPage />} />
      <Route path='/FAQ' element={<FAQPage />} />
      <Route path='/Changelog' element={<ChangelogPage />} />
      <Route path='/License' element={<LicensePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesComponent;
