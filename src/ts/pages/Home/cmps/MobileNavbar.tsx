import { useState } from 'react'
import { ISearchBy } from '../../../interfaces/search-by-interface'
import SearchTeaser from './SearchTeaser'
import { BiSearch } from 'react-icons/bi'
import SearchExpandedMobile from './SearchExpandedMobile'

interface Props {
    searchBy: ISearchBy
    setSearchBy: React.Dispatch<React.SetStateAction<ISearchBy>>
}

export default function MobileNavbar({ searchBy, setSearchBy }: Props) {
    const [isSearchOpen, setIsSearchOpen] = useState<boolean>(true)

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
                    setSearchBy={setSearchBy}
                />
            )}
        </>
    )
}
