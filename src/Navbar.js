import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Joshua McMahon Website</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white", 
                    backgroundColor: '451aa9',
                    borderRadius: '8px'
                }}>New Page</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;