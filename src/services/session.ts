export function clearSession() {
    localStorage.removeItem('auth-token')
    localStorage.removeItem('user')
}