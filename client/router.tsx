import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Main from './components/Main'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Main />} />
  </Route>
)

export const router = createBrowserRouter(routes)