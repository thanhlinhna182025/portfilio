import "./app.css";
import Navbar from "./component/navbar/Navbar";
import Intro from "./component/intro/Intro";
import Service from "./component/service/Service";
import Experience from "./component/experience/Experience";
import Work from "./component/work/Work";
import Portfolio from "./component/portfolio/Portfolio";
import Testimanial from "./component/testimanial/Testimanial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "./context/Context";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className="app"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Work />
      <Portfolio />
      <Testimanial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
