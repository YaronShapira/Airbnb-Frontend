import { useState, useEffect } from 'react'
import { ISearchBy } from '../../../interfaces/search-by-interface'
import PCNavbar from './PCNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 750)

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 750)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    function onSearch(ev: React.MouseEvent<HTMLButtonElement>) {
        ev.preventDefault()
        ev.stopPropagation()
        console.log(searchBy)
    }

    const [searchBy, setSearchBy] = useState<ISearchBy>({
        destination: '',
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })
    const props = { searchBy, setSearchBy, onSearch }

    return <>{isMobile ? <MobileNavbar {...props} /> : <PCNavbar {...props} />}</>
}
