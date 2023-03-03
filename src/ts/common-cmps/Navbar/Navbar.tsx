import { useState, useEffect } from 'react'
import { ISearchBy } from '../../interfaces/search-by-interface'
import PCNavbar from './PCNavbar'
import MobileNavbar from './MobileNavbar'
import { useSelector } from 'react-redux'
import { setSearchBy } from '../../store/stay/stay.action'
import { useNavigate } from 'react-router-dom'

interface Props {}

export default function Navbar() {
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)
    const searchBy: ISearchBy = useSelector((storeState: any) => storeState.stayModule.searchBy)

    const navigate = useNavigate()

    function updateSearchBy(searchBy: ISearchBy): void {
        setSearchBy(searchBy)
    }

    function onSearchMiddleware(ev: React.MouseEvent<HTMLButtonElement>) {
        ev.stopPropagation()
        ev.preventDefault()

        navigate(
            `/Airbnb-Frontend/?destination=${
                searchBy.destination
            }&check-in=${searchBy.checkIn.getTime()}&check-out=${searchBy.checkOut.getTime()}&adults=${
                searchBy.adults
            }&children=${searchBy.children}&infants=${searchBy.infants}&pets=${searchBy.pets}`
        )
    }

    const props = { searchBy, updateSearchBy, onSearch: onSearchMiddleware }

    return <>{isMobile ? <MobileNavbar {...props} /> : <PCNavbar {...props} />}</>
}
