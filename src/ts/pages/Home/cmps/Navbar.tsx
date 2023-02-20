import { useState } from 'react'
import AppLogo from '../../../cmps/AppLogo'
import SearchTeaser from './SearchTeaser'
import SearchExpanded from './SearchExpanded'
import UserSection from './UserSection'

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
    function onToggleSearch(): void {
        setIsSearchOpen(prevState => !prevState)
    }
    return (
        <>
            <nav className='navbar'>
                <AppLogo />
                <SearchTeaser isSearchOpen={isSearchOpen} onToggleSearch={onToggleSearch} />
                <UserSection />
            </nav>
            <SearchExpanded isSearchOpen={isSearchOpen} onToggleSearch={onToggleSearch} />
            <div className='full-bleed border'></div>
        </>
    )
}
