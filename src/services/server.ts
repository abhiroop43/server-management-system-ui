import {API_BASE_URL} from "@/constants.ts";

export async function getServersList(): Promise<Response> {
    const token = localStorage.getItem('auth-token')

    // parameterize page number and page size
    return await fetch(`${API_BASE_URL}/servers?pageNumber=1&pageSize=5`, {
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
    })
}