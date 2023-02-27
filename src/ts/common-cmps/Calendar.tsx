import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import useDidMountEffect from '../hooks/useDidMountEffect'

interface Props {
    startDate: Date
    endDate: Date

    onChange: (ranges: any) => void
}

export default function Calendar({ startDate, endDate, onChange }: Props) {
    const [calendarDates, setCalendarDates] = useState({ startDate: new Date(), endDate: new Date() })
    const selectionRange = {
        startDate: calendarDates.startDate,
        endDate: calendarDates.endDate,
        key: 'selection',
    }

    function handleCalendarSelect(ranges: any) {
        setCalendarDates({ startDate: ranges.selection.startDate, endDate: ranges.selection.endDate })
    }

    useDidMountEffect(() => {
        onChange(calendarDates)
    }, [calendarDates])

    return (
        <section className='calendar'>
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={['#ff385c']}
                onChange={handleCalendarSelect}
                showMonthAndYearPickers={false}
                showDateDisplay={false}
            />
        </section>
    )
}
