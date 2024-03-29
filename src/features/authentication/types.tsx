export interface User {
    _id: string
    name: string
    username: string
}

export interface AuthResponse {
    body: {
        user: User
        accesToken: string
        refreshToken: string
    }
}

export interface AuthResponseError {
    body: {
        error: string
    }
}