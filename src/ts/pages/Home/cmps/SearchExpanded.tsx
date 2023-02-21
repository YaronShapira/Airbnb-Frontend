import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiSearch } from 'react-icons/hi'
import DarkOverlay from '../../../cmps/DarkOverlay'
import { FilterLocation } from './FilterLocation'
import FilterDatePicker from './FilterDatePicker'
import FilterGuests from './FilterGuests'

const searchIconSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676904049/Airbnb/temp_vysd1h.svg'
interface Props {
    isSearchOpen: boolean
    onToggleSearch: () => void
}
interface ModuleMap {
    [key: string]: React.ReactNode
}

export default function SearchExpanded({ isSearchOpen, onToggleSearch }: Props) {
    const [selectedExperience, setSelectedExperience] = useState<string>('Stays')
    const [selectedModule, setSelectedModule] = useState<string>('')

    const moduleMap: ModuleMap = {
        filterLocation: <FilterLocation />,
        filterDatePickerIn: <FilterDatePicker />,
        filterDatePickerOut: <FilterDatePicker />,
        filterGuests: <FilterGuests />,
    }
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
                    <label
                        className={`module-btn where ${selectedModule === 'filterLocation' ? 'active' : ''}`}
                        onClick={() => setSelectedModule('filterLocation')}
                    >
                        <p className='header'>Where</p>
                        <input type='text' placeholder='Search destinations' />
                    </label>
                    <label
                        className={`module-btn check-in ${selectedModule === 'filterDatePickerIn' ? 'active' : ''}`}
                        onClick={() => setSelectedModule('filterDatePickerIn')}
                    >
                        <p className='header'>Check in</p>
                        <input type='text' placeholder='Add dates' />
                    </label>
                    <label
                        className={`module-btn check-out ${selectedModule === 'filterDatePickerOut' ? 'active' : ''}`}
                        onClick={() => setSelectedModule('filterDatePickerOut')}
                    >
                        <p className='header'>Check out</p>
                        <input type='text' placeholder='Add dates' />
                    </label>
                    <label
                        className={`module-btn who ${selectedModule === 'filterGuests' ? 'active' : ''}`}
                        onClick={() => setSelectedModule('filterGuests')}
                    >
                        <div className='col'>
                            <p className='header'>Who</p>
                            <input type='text' placeholder='Add guests' />
                        </div>
                        <button className='search-btn'>
                            <img src={searchIconSrc} alt='' /> Search
                        </button>
                    </label>

                    {moduleMap[selectedModule]}
                </form>
            </div>
            {isSearchOpen && <DarkOverlay onClickFunc={onToggleSearch} />}
        </>
    )
}
