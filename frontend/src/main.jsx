import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    BrowserRouter,
    useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'
import Layout from '@/components/layouts/main-layout.jsx'
import { AuthProvider } from './contexts/auth-context.jsx'
import {FlowerProvider} from "@/contexts/flower-context.jsx";

function App() {
    return (
        <Suspense>
            <Layout>{useRoutes(routes)}</Layout>
        </Suspense>
    )
}

const app = createRoot(document.getElementById('root'))
app.render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <FlowerProvider>
                    <App />
                </FlowerProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)