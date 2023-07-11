import {
  FaHome,
  FaRegAddressBook,
  FaRegWindowMaximize,
  FaUserTie,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">
          <FaHome />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FaRegAddressBook />
        </Link>
      </li>

      <li>
        <Link to="/myWork">
          <FaRegWindowMaximize />
        </Link>
      </li>

      <li>
        <Link to="/contact">
          <FaUserTie />
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar justify-center fixed  bg-opacity-50  bg-black text-white">
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal ">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
