import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contac";
import Not_found from "./components/pages/404";
import About from "./components/pages/about";
import Home from "./components/pages/Home";
import FrequentQ from "./components/pages/frequentQ";

function App() {
  return (
    <>
      <div className="bg-azulmarino">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Services" element={<Services></Services>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/404" element={<Not_found></Not_found>}></Route>
            <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/FrequentQ" element={<FrequentQ></FrequentQ>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
