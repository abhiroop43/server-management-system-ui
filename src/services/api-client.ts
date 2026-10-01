import {clearSession} from "@/services/session.ts";

function handleUnauthorizedResponse(response: Response): Response {
    if (response.status === 401) {
        clearSession()
        window.location.href = '/login'
    }

    return response
}

export async function apiFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    const response = await fetch(input, init)

    return handleUnauthorizedResponse(response)
}