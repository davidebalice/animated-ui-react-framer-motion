import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar">
      <div className="nav-title">Page Transition Demo</div>
      <div className="nav-options">
        <div className="nav-option">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-option">
          <Link to="/page1"> Page 1</Link>
        </div>
        <div className="nav-option">
          <Link to="/page2"> Page 2 </Link>
        </div>
        <div className="nav-option">
          <Link to="/page3"> Page 3</Link>
        </div>
        <div className="nav-option">
          <Link to="/page4"> Page 4</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;