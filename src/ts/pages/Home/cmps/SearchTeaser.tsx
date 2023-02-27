import { BiSearch } from 'react-icons/bi'

interface Props {
    onToggleSearch: () => void
    isSearchOpen: boolean
}

export default function SearchTeaser({ onToggleSearch, isSearchOpen }: Props) {
    return (
        <div className={`search-teaser ${isSearchOpen ? 'search-teaser-hide' : ''}`} onClick={onToggleSearch}>
            <p>Anywhere</p>
            <div className='seperator'></div>
            <p>Any week</p>
            <div className='seperator'></div>
            <p className='guests'>Add guests</p>
            <div className='search-icon'>
                <img
                    src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1677535348/Airbnb/temp_og5amn.svg'
                    alt=''
                />
            </div>
        </div>
    )
}
