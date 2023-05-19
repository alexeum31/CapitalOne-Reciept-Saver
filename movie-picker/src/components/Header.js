import {Link} from 'react-router-dom';
import './Header.css';
import test from "./images/logo.png";
// import './components/images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="rectangle-25"> </div>
            <img src="logoreal.png" class="img" />
            {/* <img src={require("./images/logo.png")} alt="Capital One Logo" /> */}
            {/* <img src={test}alt="Logo"/> */}
            {/* <img className="transparent-image" src="https://www.nicepng.com/png/detail/63-638693_capital-one-logo-white.png" alt="Capital One Logo" /> */}
            {/* <img src={require("./images/logo.png")} alt="Capital One Logo" /> */}
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
            <div className="horizontal-line-2"></div>
            <div className="settings-applications-icon-2"></div>
            <div className="mail-outline-icon-2"></div>
            <div className="shopping-basket-icon-1"></div>
            <div className="library-books-icon-1"></div>
            <div className="log-out-icon"></div>
            <div className="rectangle-14"></div>
            <label className="help">Help</label>
            <label className="contact-us">Contact us</label>
            <label className="log-out">Log out</label>
            <div className="search-bar ">Search</div>
            <div className="user-name">User Name</div>
            <div className="inbox-notiy">2</div>
        </div>
    );
}

export default Header;
