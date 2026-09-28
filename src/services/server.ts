import {API_BASE_URL} from "@/constants.ts";

export async function getServersList(): Promise<Response> {
    const token = localStorage.getItem('auth-token')

    return await fetch(`${API_BASE_URL}/auth/validate`, {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
}