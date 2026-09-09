export async function login(email: string, password: string) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password}),
    })

    if (response.ok) {
        const userData = await response.json()
        // Store token for persistence
        localStorage.setItem('auth-token', userData.token)
        localStorage.setItem('user', JSON.stringify(userData))
    } else {
        throw new Error('Authentication failed')
    }
}

export function checkAuthStatus(): boolean {
    return !!localStorage.getItem('auth-token')
}

export function logout() {
    localStorage.removeItem('auth-token')
    localStorage.removeItem('user')
}

export function getUser() {
    const userJson = localStorage.getItem('user')
    return userJson ? JSON.parse(userJson) : null
}