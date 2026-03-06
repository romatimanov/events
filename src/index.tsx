import { createRoot } from 'react-dom/client'

import './styles/main.scss'
import App from './components/app'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<App />)
