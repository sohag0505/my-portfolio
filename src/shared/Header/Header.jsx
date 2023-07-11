import { CSSTransition } from "react-transition-group";
import "tailwindcss/tailwind.css";
import resumePdf from "../../assets/Sohag-Resume.pdf";
import img from "../../assets/sohag.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="hero min-h-screen bg-slate-400">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <CSSTransition
            in={true}
            appear={true}
            timeout={3000}
            classNames="slide-in"
          >
            <img src={img} alt="" />
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={3000}
            classNames="slide-in"
          >
            <h1 className="text-5xl mt-4 font-bold">Welcome</h1>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="slide-in"
          >
            <p className="py-6">
              My name is Sohag Hossain and I am a React Developer. I have a
              strong passion for web development and creating interactive and
              user-friendly experiences for users.
            </p>
          </CSSTransition>
          <div>
            <a
              href={resumePdf}
              download="Resume.pdf"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
