import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { ISearchBy } from '../../../interfaces/search-by-interface'

interface Props {
    searchBy: ISearchBy
    setSearchBy: React.Dispatch<React.SetStateAction<ISearchBy>>
    handleSelect: () => void
}

export default function SearchDatePicker({ searchBy, setSearchBy, handleSelect }: Props) {
    const selectionRange = {
        startDate: searchBy.checkIn,
        endDate: searchBy.checkOut,
        key: 'selection',
    }
    function handleSelectDate(ranges: any) {
        setSearchBy(prevSearchBy => ({
            ...prevSearchBy,
            checkIn: ranges.selection.startDate,
            checkOut: ranges.selection.endDate,
        }))
        handleSelect()
    }
    return (
        <section className='search-module search-date-picker'>
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#ff385c']}
                onChange={handleSelectDate}
                showMonthAndYearPickers={false}
                showDateDisplay={false}
            />
        </section>
    )
}

// Make sure all the search functionality is working perfectly fine
// Polish and make everything responsive on home page
// Start on working on showcase of Stay
