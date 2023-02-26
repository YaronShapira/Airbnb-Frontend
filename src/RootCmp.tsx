import './assets/style/main.scss'
import Home from './ts/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import StayView from './ts/pages/StayView/StayView'

export default function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/Airbnb-Frontend' element={<Home />} />
                <Route path='/Airbnb-Frontend/stays/:id' element={<StayView />} />
            </Routes>
        </div>
    )
}
