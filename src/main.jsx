import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AlfApp } from './AlfApp'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AlfApp />
    </BrowserRouter>
)
