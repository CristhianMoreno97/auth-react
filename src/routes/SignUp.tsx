import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useAuth } from "../features/authentication/AuthProvider";
import { Navigate } from "react-router-dom";

export default function SignUp() {

    const auth = useAuth()
    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <DefaultLayout>
            <form action="">
                <h1>Sign up</h1>

                <label>Name</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

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

                <button>Create Account</button>
            </form>
        </DefaultLayout>
    )
}