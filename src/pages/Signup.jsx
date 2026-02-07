import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../auth/auth";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        const success = signup(email, password);
        if (!success) return alert("User already exists");
        navigate("/");
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSignup}>Create Account</button>

            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}