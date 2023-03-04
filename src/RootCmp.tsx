import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { setIsMobile } from './ts/store/app/app.action'
import StayView from './ts/pages/StayView/StayView'
import Home from './ts/pages/Home/Home'
import './assets/style/main.scss'

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
                <Route path='/' element={<Home />} />
                <Route path='/stays/:id' element={<StayView />} />
            </Routes>
        </div>
    )
}
