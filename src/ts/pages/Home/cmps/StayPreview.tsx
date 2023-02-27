import { AiFillStar } from 'react-icons/ai'
import ImgCarousel from './ImgCarousel'
import { ISkeletonStay, IStay, IStayReview } from '../../../interfaces/stay-interface'
import { stayService } from '../../../services/stays.service'

interface Props {
    stay: IStay
    onStay: (_id: string) => void
}

export default function StayPreview({ stay, onStay }: Props) {
    // getting the rating for the stay by going over the arr of reviews
    // reducing it and dividing by total reviews length
    const rating = stayService.getStayRating(stay)

    return (
        <article className='stay-preview' onClick={() => onStay(stay._id)}>
            <ImgCarousel imgUrls={stay.imgUrls} />
            <div className='details'>
                <div className='row'>
                    <p className='address'>{stay.loc.address}</p>
                    <div className='stars'>
                        <AiFillStar color='black' />
                        <p>{rating.toFixed(1)}</p>
                    </div>
                </div>

                <p className='type'>{stay.type}</p>
                <p className='available'>Jul 22 - 29</p>
                <p className='price'>
                    ${stay.price} <span className='prefix'>night</span>
                </p>
            </div>
        </article>
    )
}
