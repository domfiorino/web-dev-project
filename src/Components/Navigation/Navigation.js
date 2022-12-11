import { Link } from "react-router-dom";
import "../../styles.css";

const NavigationModule = () => (

  <div className="navigation">
    <a>
      <Link to="/Duncan">Duncan Menu</Link>
    </a>
    <a>
      <Link to="/">Home Page</Link>
    </a>
    <a>
      <Link to="/chat">Order Updates Chat</Link>
    </a>
  </div>
);

export default NavigationModule;
