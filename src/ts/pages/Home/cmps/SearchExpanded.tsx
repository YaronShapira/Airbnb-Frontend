import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiSearch } from 'react-icons/hi'
import DarkOverlay from '../../../cmps/DarkOverlay'

const searchIconSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676904049/Airbnb/temp_vysd1h.svg'
interface Props {
    isSearchOpen: boolean
    onToggleSearch: () => void
}

export default function SearchExpanded({ isSearchOpen, onToggleSearch }: Props) {
    const [selectedExperience, setSelectedExperience] = useState<string>('Stays')
    return (
        <>
            <div className={`experience-type ${isSearchOpen && 'shown'}`}>
                <button className={`${selectedExperience === 'Stays' ? 'active' : ''}`}>Stays</button>
                <button className={`${selectedExperience === 'Experiences' ? 'active' : ''}`}>Experiences</button>
                <button className={`${selectedExperience === 'Online Experiences' ? 'active' : ''}`}>
                    Online Experiences
                </button>
            </div>
            <div className={`search-expanded ${isSearchOpen && 'shown'}`}>
                <form className='search-expanded-filter'>
                    <label className='where'>
                        <p className='header'>Where</p>
                        <input type='text' placeholder='Search destinations' />
                    </label>
                    <label>
                        <p className='header'>Check in</p>
                        <input type='text' placeholder='Add dates' />
                    </label>
                    <label>
                        <p className='header'>Check out</p>
                        <input type='text' placeholder='Add dates' />
                    </label>
                    <label>
                        <p className='header'>Who</p>
                        <input type='text' placeholder='Add guests' />
                    </label>
                    <button className='search-btn'>
                        <img src={searchIconSrc} alt='' /> Search
                    </button>
                </form>
            </div>
            {isSearchOpen && <DarkOverlay onClickFunc={onToggleSearch} />}
        </>
    )
}
