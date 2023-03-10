import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IStay } from '../../../interfaces/stay-interface'
import { stayService } from '../../../services/stays.service'
import { useSelector } from 'react-redux'
import StayReviewBar from './StayReviewBar'
import StayReview from './StayReview'

interface Props {
    stay: IStay
}

export default function StayReviews({ stay }: Props) {
    const [pagination, setPagination] = useState(5)
    const isMobile = useSelector((storeState: any) => storeState.appModule.isMobile)

    const rating = stayService.getStayRating(stay)

    function onShowMore() {
        setPagination(prev => prev + 5)
    }

    const mobileReviews = stay.reviews.slice(0, pagination)

    const cleanlinessRating = stayService.getStayNicheRating(stay, 'cleanliness')
    const accuracyRating = stayService.getStayNicheRating(stay, 'accuracy')
    const communicationRating = stayService.getStayNicheRating(stay, 'communication')
    const locationRating = stayService.getStayNicheRating(stay, 'location')
    const checkInRating = stayService.getStayNicheRating(stay, 'checkIn')
    const valueRating = stayService.getStayNicheRating(stay, 'value')

    return (
        <div className='border-bottom stay-reviews'>
            <h3>
                <AiFillStar color='black' />
                {rating.toFixed(2)} · {stay.reviews.length} reviews
            </h3>
            <div className='review-bars'>
                <StayReviewBar name={'Cleanliness'} rating={cleanlinessRating} />
                <StayReviewBar name={'Accuracy'} rating={accuracyRating} />
                <StayReviewBar name={'Communication'} rating={communicationRating} />
                <StayReviewBar name={'Location'} rating={locationRating} />
                <StayReviewBar name={'Check-in'} rating={checkInRating} />
                <StayReviewBar name={'Value'} rating={valueRating} />
            </div>
            {!isMobile && (
                <div className='reviews'>
                    {stay.reviews.map((review, idx) => {
                        return <StayReview review={review} key={idx} />
                    })}
                </div>
            )}
            {isMobile && (
                <div className='reviews'>
                    {mobileReviews.map((review, idx) => {
                        return <StayReview review={review} key={idx} />
                    })}
                    {pagination < stay.reviews.length && (
                        <button className='show-more' onClick={onShowMore}>
                            Show more
                        </button>
                    )}
                    {pagination >= stay.reviews.length && (
                        <button className='show-more' onClick={() => setPagination(5)}>
                            Show less
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
