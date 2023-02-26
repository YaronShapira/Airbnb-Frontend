import { useState } from 'react'
import AppLogo from './AppLogo'
import SearchExpanded from '../../pages/Home/cmps/SearchExpanded'
import SearchTeaser from '../../pages/Home/cmps/SearchTeaser'
import UserSection from '../../pages/Home/cmps/UserSection'
import { ISearchBy } from '../../interfaces/search-by-interface'

interface Props {
    searchBy: ISearchBy
    setSearchBy: React.Dispatch<React.SetStateAction<ISearchBy>>
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function PCNavbar({ searchBy, setSearchBy, onSearch }: Props) {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

    function onToggleSearch(): void {
        setIsSearchOpen(prevState => !prevState)
    }
    return (
        <>
            <nav className={`navbar ${isSearchOpen ? 'expanded' : ''}`}>
                <AppLogo />
                <SearchTeaser isSearchOpen={isSearchOpen} onToggleSearch={onToggleSearch} />
                <UserSection />
            </nav>
            <SearchExpanded
                isSearchOpen={isSearchOpen}
                onToggleSearch={onToggleSearch}
                searchBy={searchBy}
                setSearchBy={setSearchBy}
                onSearch={onSearch}
            />
            <div className='full-bleed border'></div>
        </>
    )
}
