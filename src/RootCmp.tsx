import './assets/style/main.scss'
import Home from './ts/pages/Home/Home'
import Navbar from './ts/pages/Home/cmps/Navbar'
import { Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}
