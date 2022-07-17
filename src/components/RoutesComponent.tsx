import {
  Routes,
  Route
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import RoadmapPage from '../pages/RoadmapPage';
import FAQPage from '../pages/FAQPage';

function RoutesComponent() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Roadmap" element={<RoadmapPage />} />
          <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
  );
}

export default RoutesComponent;