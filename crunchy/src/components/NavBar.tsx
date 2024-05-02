import { Link } from "react-router-dom";
import classes from './NavBar.module.css'
const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/browse" className={classes.li}>Browse</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="signin">signin</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default NavBar;
