import { Link } from "react-router-dom";
import "../../styles.css";

const NavigationModule = () => (
  <div>
    <nav>
      <ul className="navigation">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/Duncan">Duncan Menu</Link>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
);

export default NavigationModule;
