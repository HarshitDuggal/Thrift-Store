import { Link } from "react-router-dom";
// import './navbar.css';
const Navbar = () => {
    return (
        <Navbar>
            <Link to="/">
                Home
            </Link>
            <Link to="/login">
                Login
            </Link>            
        </Navbar>
    );
}

export default Navbar;
