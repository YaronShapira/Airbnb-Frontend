import { useState } from 'react'
import AppLogo from './AppLogo'
import SearchExpanded from '../../pages/Home/cmps/SearchExpanded'
import SearchTeaser from '../../pages/Home/cmps/SearchTeaser'
import UserSection from '../../pages/Home/cmps/UserSection'
import { ISearchBy } from '../../interfaces/search-by-interface'

interface Props {
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy: ISearchBy) => void
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
    onToggleSearch: () => void
    isSearchOpen: boolean
}

export default function PCNavbar({ searchBy, updateSearchBy, onSearch, onToggleSearch, isSearchOpen }: Props) {
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
                updateSearchBy={updateSearchBy}
                onSearch={onSearch}
            />
            <div className='full-bleed border'></div>
        </>
    )
}
