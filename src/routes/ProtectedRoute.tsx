import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/authentication/AuthProvider";

export default function ProtectedRoute() {
    const auth = useAuth()

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

