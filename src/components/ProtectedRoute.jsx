import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../auth/auth";

export default function ProtectedRoute({ children }) {
    const user = getCurrentUser();
    return user ? children : <Navigate to="/login" />;
}