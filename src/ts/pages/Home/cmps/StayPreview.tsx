import { AiFillStar } from 'react-icons/ai'
import ImgCarousel from './ImgCarousel'
import { ISkeletonStay, IStay, IStayReview } from '../../../interfaces/stay-interface'

interface Props {
    stay: IStay
    onStay: (_id: string) => void
}

export default function StayPreview({ stay, onStay }: Props) {
    // getting the rating for the stay by going over the arr of reviews
    // reducing it and dividing by total reviews length
    const rating =
        stay.reviews.reduce((acc: number, review: IStayReview) => {
            const values: number[] = Object.values(review.moreRate)
            const average = values.reduce((sum, value) => sum + value, 0) / values.length

            return acc + average
        }, 0) / stay.reviews.length

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
