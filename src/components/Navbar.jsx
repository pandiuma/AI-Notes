import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../auth/auth";

export default function Navbar() {
    const user = getCurrentUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <h2>🧠 AI Notes</h2>

            <div>
                {user ? (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/create">New Note</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}