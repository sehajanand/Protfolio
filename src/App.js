import "./App.css";
import Header from "./Components/Header.js";
import Intro from "./Components/Intro.js";
import Mywork from "./Components/Mywork";
import AOS from "aos";
import Footer from "./Components/Footer.js";
import Resume from "./Components/Resume";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact.js";
import Work1details from "./Components/Myworkcomponents/Myprojectsdetails/Myworkproject1details.js";
import Work2details from "./Components/Myworkcomponents/Myprojectsdetails/Myworkproject2details.js";
import Work3details from "./Components/Myworkcomponents/Myprojectsdetails/Myworkproject3details.js";

function App() {
  AOS.init();
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Intro />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Mywork />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Resume />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Contact />} />
          </Routes>
          <Routes>
            <Route path="/work1" element={<Work1details />} />
          </Routes>
          <Routes>
            <Route path="/work2" element={<Work2details />} />
          </Routes>
          <Routes>
            <Route path="/work3" element={<Work3details />} />
          </Routes>
        </main> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
