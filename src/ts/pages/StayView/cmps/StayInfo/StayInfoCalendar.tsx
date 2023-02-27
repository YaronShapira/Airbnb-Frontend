import Calendar from '../../../../common-cmps/Calendar'

export default function StayInfoCalendar() {
    function onCalendarChange(dates: any) {
        console.log(dates)
    }

    return (
        <div className='stay-info-calendar'>
            <Calendar startDate={new Date()} endDate={new Date()} onChange={onCalendarChange} />
        </div>
    )
}
