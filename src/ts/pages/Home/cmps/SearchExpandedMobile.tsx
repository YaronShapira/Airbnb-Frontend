import { useState, useEffect } from 'react'
import { ISearchBy } from '../../../interfaces/search-by-interface'
import SearchLocation from './SearchLocation'
import SearchDatePicker from './SearchDatePicker'
import SearchGuests from './SearchGuests'
import { AiOutlineClose } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'

interface Props {
    isSearchOpen: boolean
    onToggleSearch: () => void
    searchBy: ISearchBy
    setSearchBy: React.Dispatch<React.SetStateAction<ISearchBy>>
    onSearch: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

export default function SearchExpandedMobile({ isSearchOpen, onToggleSearch, searchBy, setSearchBy, onSearch }: Props) {
    const [selectedExperience, setSelectedExperience] = useState<string>('Stays')
    const [selectedModule, setSelectedModule] = useState<string>('')

    useEffect(() => {
        document.body.classList.add('remove-scrollbar')

        return () => {
            document.body.classList.remove('remove-scrollbar')
        }
    }, [])

    function handleGuestsCounter(inc: number, searchByField: string) {
        const updatedField = +searchBy[searchByField] + inc

        setSearchBy(prevSearchBy => ({ ...prevSearchBy, [searchByField]: updatedField }))
    }

    function guestsCountFormatted() {
        const guestsCount = searchBy.adults + searchBy.children + searchBy.infants + searchBy.pets
        if (guestsCount === 0) return 'Add guests'
        if (guestsCount === 1) return '1 guest'
        else return `${guestsCount} guests`
    }

    function setSelectedModuleMiddleware(ev: React.MouseEvent<HTMLDivElement, MouseEvent>, module: string) {
        ev.stopPropagation()
        ev.preventDefault()

        setSelectedModule(prevModule => {
            if (prevModule === module) return ''
            else return module
        })
    }

    function handleSelect(): void {
        switch (selectedModule) {
            case 'searchLocation':
                setSelectedModule('searchDatePicker')
                break
            default:
                break
        }
    }

    return (
        <div className='main-layout search-expanded-mobile'>
            <button className='close' onClick={onToggleSearch}>
                <AiOutlineClose fontSize={'13px'} fontWeight={700} />
            </button>
            <div className='experiences'>
                <p
                    onClick={() => setSelectedExperience('Stays')}
                    className={selectedExperience === 'Stays' ? 'active' : ''}
                >
                    Stays
                </p>
                <p
                    onClick={() => setSelectedExperience('Experiences')}
                    className={selectedExperience === 'Experiences' ? 'active' : ''}
                >
                    Experiences
                </p>
            </div>
            <div className='tabs'>
                {selectedModule !== 'searchLocation' && (
                    <div className='tab' onClick={ev => setSelectedModuleMiddleware(ev, 'searchLocation')}>
                        <p className='muted'>Where</p>
                        <p>{searchBy.destination ? searchBy.destination : "I'm flexible"}</p>
                    </div>
                )}
                {selectedModule === 'searchLocation' && (
                    <SearchLocation
                        isMobile={true}
                        searchBy={searchBy}
                        setSearchBy={setSearchBy}
                        handleSelect={handleSelect}
                    />
                )}
                {selectedModule !== 'searchDatePicker' && (
                    <div className='tab' onClick={ev => setSelectedModuleMiddleware(ev, 'searchDatePicker')}>
                        <p className='muted'>When</p>
                        <p>{`${searchBy.checkIn.toLocaleDateString()} - ${searchBy.checkOut.toLocaleDateString()}`}</p>
                    </div>
                )}
                {selectedModule === 'searchDatePicker' && (
                    <SearchDatePicker searchBy={searchBy} setSearchBy={setSearchBy} handleSelect={() => {}} />
                )}
                {selectedModule !== 'searchGuests' && (
                    <div className='tab' onClick={ev => setSelectedModuleMiddleware(ev, 'searchGuests')}>
                        <p className='muted'>Who</p>
                        <p>{guestsCountFormatted()}</p>
                    </div>
                )}
                {selectedModule === 'searchGuests' && (
                    <SearchGuests handleGuestsCounter={handleGuestsCounter} searchBy={searchBy} />
                )}
            </div>
            <div className='full-bleed footer'>
                <p>Clear all</p>
                <button onClick={onSearch}>
                    <BiSearch fontSize={'20px'} />
                    Search
                </button>
            </div>
        </div>
    )
}
