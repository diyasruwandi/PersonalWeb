import '../src/lib/i18n'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "../src/components/Navbar";
import Home from "../src/pages/Home";
import ErrorPage from "../src/components/ErrorPage";
// import { ScreenFitText } from "./components/ScreenFitText";
// import { SlideTabsExample } from "./components/SlideTabs";

function App() {
  return (
    <Router>
      {/* <SlideTabsExample /> */}
      {/* <Navbar /> */}
      {/* <ScreenFitText /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
