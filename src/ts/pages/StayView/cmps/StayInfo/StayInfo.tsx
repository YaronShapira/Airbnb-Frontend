import { IStay } from '../../../../interfaces/stay-interface'
import StayInfoAirCover from './StayInfoAirCover'
import StayInfoBonuses from './StayInfoBonuses'
import StayInfoCalendar from './StayInfoCalendar'
import StayInfoHeader from './StayInfoHeader'
import StayInfoOffering from './StayInfoOffering'
import StayInfoSleep from './StayInfoSleep'
import StayInfoSummary from './StayInfoSummary'

interface Props {
    stay: IStay
}

export default function StayInfo({ stay }: Props) {
    return (
        <div className='stay-info'>
            <StayInfoHeader stay={stay} />
            <StayInfoBonuses />
            <StayInfoAirCover />
            <StayInfoSummary stay={stay} />
            <StayInfoSleep />
            <StayInfoOffering stay={stay} />
            <StayInfoCalendar stay={stay} />
        </div>
    )
}
