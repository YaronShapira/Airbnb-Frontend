import { useState } from 'react'
import { ISearchBy } from '../../interfaces/search-by-interface'
import { useSelector } from 'react-redux'
import { setSearchBy } from '../../store/stay/stay.action'
import { useNavigate } from 'react-router-dom'
import PCNavbar from './PCNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)
    const searchBy: ISearchBy = useSelector((storeState: any) => storeState.stayModule.searchBy)

    const navigate = useNavigate()

    function updateSearchBy(searchBy: ISearchBy): void {
        setSearchBy(searchBy)
    }

    function onToggleSearch(): void {
        setIsSearchOpen(prevState => !prevState)
    }

    function onSearchMiddleware(ev: React.MouseEvent<HTMLButtonElement>) {
        ev.stopPropagation()
        ev.preventDefault()
        setIsSearchOpen(false)

        navigate(
            `/?destination=${
                searchBy.destination
            }&check-in=${searchBy.checkIn.getTime()}&check-out=${searchBy.checkOut.getTime()}&adults=${
                searchBy.adults
            }&children=${searchBy.children}&infants=${searchBy.infants}&pets=${searchBy.pets}`
        )
    }

    const props = { isSearchOpen, searchBy, onToggleSearch, updateSearchBy, onSearch: onSearchMiddleware }

    return <>{isMobile ? <MobileNavbar {...props} /> : <PCNavbar {...props} />}</>
}
