import { useState } from 'react'
import { ISearchBy } from '../../interfaces/search-by-interface'
import { BiSearch } from 'react-icons/bi'
import SearchExpandedMobile from '../../pages/Home/cmps/SearchExpandedMobile'

interface Props {
    searchBy: ISearchBy
    updateSearchBy: (ISearchBy:ISearchBy) => void
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function MobileNavbar({ searchBy, updateSearchBy, onSearch }: Props) {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

    function onToggleSearch(): void {
        setIsSearchOpen(prevState => !prevState)
    }

    return (
        <>
            <nav className='mobile-navbar'>
                <div className='search-teaser' onClick={onToggleSearch}>
                    <div className='search-icon'>
                        <BiSearch fontSize={'20px'} />
                    </div>
                    <div className='col'>
                        <p>Anywhere</p>
                        <div className='row'>
                            <p>Any week</p>
                            <p>•</p>
                            <p>Add guests</p>
                        </div>
                    </div>
                </div>
            </nav>
            {isSearchOpen && (
                <SearchExpandedMobile
                    isSearchOpen={isSearchOpen}
                    onToggleSearch={onToggleSearch}
                    searchBy={searchBy}
                    updateSearchBy={updateSearchBy}
                    onSearch={onSearch}
                />
            )}
        </>
    )
}
