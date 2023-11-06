import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <About />
      <Project />
      <Contact />
      <ToastContainer theme="light" autoClose={2500} />
    </main>
  );
}
