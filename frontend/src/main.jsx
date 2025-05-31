import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import LoginPage from './pages/Signin';
import Register from './pages/Signup';

function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routes>
                <Route path="/Signin" element={<LoginPage />} />
                <Route path="/Signup" element={<Register />} />
            </Routes>
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