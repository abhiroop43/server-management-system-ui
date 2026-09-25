const API_BASE_URL = 'https://abhiroop43-server-mgmt-api-fpgyh9bsd0caevah.canadacentral-01.azurewebsites.net'

export async function loginUser(email: string, password: string) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
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

export async function validateToken(token: string): Promise<Response> {
    // console.log('Validating token:', token)
    return await fetch(`${API_BASE_URL}/auth/validate`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({token}),
    })
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