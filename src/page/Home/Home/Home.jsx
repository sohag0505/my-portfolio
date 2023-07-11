import Header from "../../../shared/Header/Header";
import Navbar from "../../../shared/Navbar/Navbar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Work from "./work/Work";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
};

export default Home;
