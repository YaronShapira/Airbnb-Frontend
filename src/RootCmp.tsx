import './assets/style/main.scss'
import Home from './ts/pages/Home/Home'
import Navbar from './ts/pages/Home/cmps/Navbar'

export default function App() {
    return (
        <div className='main-layout app'>
            <Navbar />
            <Home />
        </div>
    )
}
