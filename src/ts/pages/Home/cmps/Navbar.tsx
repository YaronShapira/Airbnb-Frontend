import { useState, useRef } from 'react'
import { RiGlobalLine } from 'react-icons/ri'
import AppLogo from '../../../cmps/AppLogo'
import SearchTeaser from './SearchTeaser'
import SearchExpanded from './SearchExpanded'
import { FilterLocation } from './FilterLocation'
import { BiSearch } from 'react-icons/bi'
import FilterGuests from './FilterGuests'
import FilterDatePicker from './FilterDatePicker'
import DarkOverlay from '../../../cmps/DarkOverlay'

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    function onToggleSearch(): void {
        setIsSearchOpen(prevState => !prevState)
    }
    return (
        <>
            <nav className={`navbar ${isSearchOpen ? 'expanded' : ''}`}>
                <AppLogo />
                <SearchTeaser onToggleSearch={onToggleSearch} isSearchOpen={isSearchOpen} />
                <div className='user-section'>
                    <button className='airbnb-cta'>Airbnb your home</button>
                    <button className='language'>
                        <RiGlobalLine fontSize={'19px'} />
                    </button>
                    <button className='user-open-modal'>
                        <img
                            src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822362/Airbnb/temp_1_au1jus.png'
                            alt=''
                        />
                        <img
                            src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822576/Airbnb/temp_3_b1go8l.png'
                            alt=''
                        />
                    </button>
                </div>
            </nav>
            <div className={`search-expanded ${isSearchOpen && 'shown'}`}>
                <form className='search-expanded-filter'></form>
            </div>
            {isSearchOpen && <DarkOverlay onClickFunc={setIsSearchOpen} />}
            <div className='full-bleed border'></div>
        </>
    )
}
