import { useState } from 'react'

import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

export default function SearchDatePicker() {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection',
    }
    function handleSelect(ranges: any) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <section className='search-module search-date-picker'>
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#ff385c']}
                onChange={handleSelect}
            />
        </section>
    )
}
