import { IStay } from '../../../interfaces/stay-interface'

interface Props {
    stay: IStay
}

export default function StayGallery({ stay }: Props) {
    return (
        <div className='stay-gallery'>
            <img src={stay.imgUrls[0]} alt='' className='main-image' />
            <div className='grid'>
                <img src={stay.imgUrls[1]} alt='' />
                <img src={stay.imgUrls[2]} alt='' />
                <img src={stay.imgUrls[3]} alt='' />
                <img src={stay.imgUrls[4]} alt='' />
            </div>
        </div>
    )
}
