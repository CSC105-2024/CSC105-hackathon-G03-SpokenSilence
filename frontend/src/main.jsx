import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routes from '~react-pages'
import {
    BrowserRouter,
    useRoutes,
} from 'react-router-dom'

function App() {
    const route = useRoutes(routes)
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {route}
        </Suspense>
    )
}

const app = createRoot(document.getElementById('root'))

app.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)