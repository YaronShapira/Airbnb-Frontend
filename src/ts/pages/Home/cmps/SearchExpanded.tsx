import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiSearch } from 'react-icons/hi'
import DarkOverlay from '../../../cmps/DarkOverlay'
import { FilterLocation } from './FilterLocation'
import FilterDatePicker from './FilterDatePicker'
import FilterGuests from './FilterGuests'
import { IFilterBy } from '../../../interfaces/filterby-interface'

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
    const [filterBy, setFilterBy] = useState<IFilterBy>({
        destination: '',
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })

    function handleGuestsCounter(inc: number, filterByField: string) {
        const updatedField = +filterBy[filterByField] + inc

        setFilterBy(prevFilterBy => ({ ...prevFilterBy, [filterByField]: updatedField }))
    }

    function guestsCountFormatted() {
        const guestsCount = filterBy.adults + filterBy.children + filterBy.infants + filterBy.pets
        if (guestsCount === 0) return ''
        if (guestsCount === 1) return '1 guest'
        else return `${guestsCount} guests`
    }

    function setSelectedModuleMiddleware(ev: React.MouseEvent<HTMLLabelElement, MouseEvent>, module: string) {
        ev.stopPropagation()
        ev.preventDefault()

        setSelectedModule(prevModule => {

            if (prevModule === module) return ''
            else return module
        })
    }

    function onSearch(ev: React.MouseEvent<HTMLButtonElement>) {
        ev.preventDefault()
        ev.stopPropagation()
    }

    const moduleMap: ModuleMap = {
        filterLocation: <FilterLocation />,
        filterDatePickerIn: <FilterDatePicker />,
        filterDatePickerOut: <FilterDatePicker />,
        filterGuests: <FilterGuests handleGuestsCounter={handleGuestsCounter} filterBy={filterBy} />,
    }
    return (
        <>
            <div className={`experience-type ${isSearchOpen && 'shown'}`}>
                <button
                    className={`${selectedExperience === 'Stays' ? 'active' : ''}`}
                    onClick={() => setSelectedExperience('Stays')}
                >
                    Stays
                </button>
                <button
                    className={`${selectedExperience === 'Experiences' ? 'active' : ''}`}
                    onClick={() => setSelectedExperience('Experiences')}
                >
                    Experiences
                </button>
                <button
                    className={`${selectedExperience === 'Online Experiences' ? 'active' : ''}`}
                    onClick={() => setSelectedExperience('Online Experiences')}
                >
                    Online Experiences
                </button>
            </div>
            <div className={`search-expanded ${isSearchOpen && 'shown'}`}>
                <div className='search-expanded-filter'>
                    <label
                        className={`module-btn where ${selectedModule === 'filterLocation' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'filterLocation')}
                    >
                        <p className='header'>Where</p>
                        <input type='text' placeholder='Search destinations' />
                    </label>
                    <label
                        className={`module-btn check-in ${selectedModule === 'filterDatePickerIn' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'filterDatePickerIn')}
                    >
                        <p className='header'>Check in</p>
                        <input type='text' placeholder='Add dates' />
                    </label>
                    <label
                        className={`module-btn check-out ${selectedModule === 'filterDatePickerOut' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'filterDatePickerOut')}
                    >
                        <p className='header'>Check out</p>
                        <input type='text' placeholder='Add dates' />
                    </label>
                    <label
                        className={`module-btn who ${selectedModule === 'filterGuests' ? 'active' : ''}`}
                        onClick={ev => setSelectedModuleMiddleware(ev, 'filterGuests')}
                    >
                        <div className='col'>
                            <p className='header'>Who</p>
                            <input type='text' placeholder='Add guests' value={guestsCountFormatted()} readOnly />
                        </div>
                        <button className='search-btn' onClick={onSearch}>
                            <img src={searchIconSrc} alt='' /> Search
                        </button>
                    </label>

                    {moduleMap[selectedModule]}
                </div>
            </div>
            {isSearchOpen && <DarkOverlay onClickFunc={onToggleSearch} />}
        </>
    )
}
