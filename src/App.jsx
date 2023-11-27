import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contac";
import Not_found from "./components/pages/404";
import About from "./components/pages/about";
import Home from "./components/pages/Home";
import FrequentQ from "./components/pages/frequentQ";
import SingInError from "./components/pages/SingInError";
import Search from './components/Search';
import ViewAppointments from './components/ViewAppointments';
import Viewhistorial from "./components/Viewhistorial";
import ViewPdf from "./components/pages/ViewPdf";
import ViewPdf2 from "./components/pages/ViewPdf2";

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
            <Route path="/frequentQ" element={<FrequentQ></FrequentQ>}></Route>
            <Route path="/Singerror" element={<SingInError></SingInError>}></Route>
            <Route path="/Search" element={<Search></Search>}></Route>
            <Route path="/View/:id" element={<ViewAppointments> </ViewAppointments>}></Route>
            <Route path="/Viewhistorial/" element={<Viewhistorial> </Viewhistorial>}></Route>
            <Route path="/pdf" element={<ViewPdf> </ViewPdf>}></Route>
            <Route path="/pdf2" element={<ViewPdf2> </ViewPdf2>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;