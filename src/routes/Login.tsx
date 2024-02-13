import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useAuth } from "../features/authentication/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Login() {

    const auth = useAuth()
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <DefaultLayout>
            <form action="">
                <h1>Login</h1>

                <label>Username</label>
                <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button>Login</button>
            </form>
        </DefaultLayout>
    )
}