import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createRouter, RouterProvider} from '@tanstack/react-router'

import {routeTree} from './routeTree.gen'
import {AuthProvider, useAuth} from "@/auth.tsx";

const router = createRouter({
    routeTree,
    context: {
        auth: undefined!,
    },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {
    // 3. Consume your application's actual auth state
    const auth = useAuth()

    // 4. Inject the current auth state into the router context dynamically
    return <RouterProvider router={router} context={{auth}}/>
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <AuthProvider><App/></AuthProvider>
        </StrictMode>,
    )
}