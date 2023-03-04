import miniLogo from '../../../../assets/img/logo/mini-logo.svg'
import { IStay } from '../../../interfaces/stay-interface'
import StayInfoHeader from './StayInfo/StayInfoHeader'

interface Props {
    stay: IStay
    isReserved: boolean
    setIsReserved: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ReservationComplete({ stay, isReserved, setIsReserved }: Props) {
    return (
        <>
            <div className={`strong-dark-overlay ${isReserved ? 'shown' : ''}`}></div>
            <div className={`reservation-complete ${isReserved ? 'shown' : ''}`}>
                <img src={miniLogo} alt='' className='logo' />
                <h1>It's vacation time!</h1>
                <p className='sub-heading'>You're going to {stay.loc.city}!</p>
                <img src={stay.imgUrls[0]} alt='' className='stay-image' />
                <StayInfoHeader stay={stay} />
                <p className='thank-you-paragraph'>
                    Thank you for choosing to stay with us! We hope you have a wonderful time in our Airbnb clone. Your
                    purchase has been confirmed and we look forward to hosting you soon.
                </p>
                <button onClick={() => setIsReserved(false)}>Close</button>
            </div>
        </>
    )
}
