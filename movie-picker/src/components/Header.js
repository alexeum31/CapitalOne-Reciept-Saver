import {Link} from 'react-router-dom';
import './Header.css';
import test from "./images/logo.png";

// import './components/images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="rectangle-25"> </div>
            {/* <img src={require("./images/logo.png")} alt="Capital One Logo" /> */}
            <img src={test}alt="Logo"/>
            {/* <h1 className="logo"> Logo Header</h1> */}
            <div className="links">
                <Link to="/dashboard">Overview</Link>
            </div>
            <div className="links">
                <Link to="/dashboard">Inbox</Link>
            </div>
            <div className="links">
                <Link to="/Receipts">Products</Link>
            </div>
            <div className="links">
                <Link to="/dashboard">Statements</Link>
            </div>
            <div className="links">
                <Link to="/dashboard">Settings</Link>
            </div>
            <div className="dashboard-icon-1"></div>
            <div className="keyboard-arrow-down-icon-1"></div>
            <div className="rectangle-7"></div>
            <div className="search-bar ">Search</div>
            <div className="user-name">User Name</div>
        </div>
    );
}

export default Header;
