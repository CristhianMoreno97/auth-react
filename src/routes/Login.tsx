import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useAuth } from "../features/authentication/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponseError } from "../features/authentication/types";

export default function Login() {

    const auth = useAuth()
    const goTo = useNavigate()

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorResponse, setErrorResponse] = useState("")

    const apiUrl = import.meta.env.VITE_APP_API_URL

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username,
                    password
                })
            })

            if (response.ok) {
                console.log('User Logged in')
                setErrorResponse("")
                goTo("/")
            } else {
                console.log('Something went wrong')
                const json = (await response.json()) as AuthResponseError
                setErrorResponse(json.body.error)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DefaultLayout>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                {errorResponse && <p>{errorResponse}</p>}

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