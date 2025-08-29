import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Details from "./components/section4/details/Details";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
  <ScrollToTop>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
          </>
        }
      />
      <Route path="/details" element={<Details />} />
    </Routes>
  </ScrollToTop>
  <Footer />
</Router>

  );
}

export default App;
