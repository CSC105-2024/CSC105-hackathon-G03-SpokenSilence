import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    BrowserRouter,
    useRoutes,
} from 'react-router-dom'
import routes from '~react-pages'
import Layout from '@/components/layouts/main-layout.jsx'

function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Layout>{useRoutes(routes)}</Layout>
        </Suspense>
    )
}

const app = createRoot(document.getElementById('root'))
app.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)
