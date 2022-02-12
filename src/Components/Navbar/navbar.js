import { Link } from "react-router-dom";

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
