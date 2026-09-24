import React, {createContext, useContext, useEffect, useState} from 'react'
import {getUser, loginUser} from "@/services/auth.ts";

interface User {
    id: string
    username: string
    email: string
}

interface AuthState {
    isAuthenticated: boolean
    user: User | null
    login: (username: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthState | undefined>(undefined)

export function AuthProvider({children}: Readonly<{ children: React.ReactNode }>) {
    const [user, setUser] = useState<User | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // Restore auth state on app load
    useEffect(() => {
        const token = localStorage.getItem('auth-token')
        if (token) {
            // Validate token with your API
            fetch('/api/validate-token', {
                headers: {Authorization: `Bearer ${token}`},
            })
                .then((response) => response.json())
                .then((userData) => {
                    if (userData.valid) {
                        setUser(userData.user)
                        setIsAuthenticated(true)
                    } else {
                        localStorage.removeItem('auth-token')
                    }
                })
                .catch(() => {
                    localStorage.removeItem('auth-token')
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    // Show loading state while checking auth
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                Loading...
            </div>
        )
    }

    const login = async (username: string, password: string) => {
        await loginUser(username, password)

        setUser(getUser())
        setIsAuthenticated(true)
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        localStorage.removeItem('auth-token')
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}