import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../auth/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const success = login(email, password);
        if (!success) return alert("Invalid credentials");
        navigate("/");
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>

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

            <button onClick={handleLogin}>Login</button>

            <p>
                Don’t have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}