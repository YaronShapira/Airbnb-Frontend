import { IStay } from '../../../../interfaces/stay-interface'

interface Props {
    stay: IStay
}

export default function StayInfoSummary({ stay }: Props) {
    return (
        <div className='border-bottom stay-info-summary'>
            <div className='row'>
                <img
                    src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1677432554/Airbnb/temp_fmx7gf.svg'
                    alt=''
                />
                <p>Some info has been automatically translated.</p>
            </div>
            <p className='summary'>{stay.summary}</p>
        </div>
    )
}
