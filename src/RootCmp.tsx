import './assets/style/main.scss'
import Home from './ts/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import StayView from './ts/pages/StayView/StayView'
import { useEffect } from 'react'
import { setIsMobile } from './ts/store/app/app.action'
import { useSelector } from 'react-redux'

export default function App() {
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)
    useEffect(() => {
        function handleResize() {
            if (isMobile && window.innerWidth <= 750) return
            if (!isMobile && window.innerWidth > 750) return
            else setIsMobile(window.innerWidth <= 750)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobile])

    return (
        <div className='app'>
            <Routes>
                <Route path='/Airbnb-Frontend' element={<Home />} />
                <Route path='/Airbnb-Frontend/stays/:id' element={<StayView />} />
            </Routes>
        </div>
    )
}
