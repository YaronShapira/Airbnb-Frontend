import { FiShare } from 'react-icons/fi'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { IStay, IStayReview } from '../../../interfaces/stay-interface'

interface Props {
    stay: IStay
}

export default function StayHeader({ stay }: Props) {
    // getting the rating for the stay by going over the arr of reviews
    // reducing it and dividing by total reviews length
    const rating =
        stay.reviews.reduce((acc: number, review: IStayReview) => {
            const values: number[] = Object.values(review.moreRate)
            const average = values.reduce((sum, value) => sum + value, 0) / values.length

            return acc + average
        }, 0) / stay.reviews.length

    return (
        <div className='stay-header'>
            <h1>{stay.name}</h1>
            <div className='row'>
                <div className='about'>
                    <p>
                        <AiFillStar color='black' />
                    </p>
                    <p>{rating.toFixed(2)}</p>
                    <p> · </p>
                    <p className='underline'>{stay.reviews.length} reviews</p>
                    <p> · </p>
                    {stay.host.isSuperHost && (
                        <>
                            <p> ❣ </p>
                            <p className='superhost'>Superhost</p>
                            <p> · </p>
                        </>
                    )}
                    <p className='underline'>{stay.loc.address}</p>
                </div>
                <div className='btns'>
                    <button>
                        <FiShare />
                        <p>Share</p>
                    </button>
                    <button>
                        <AiOutlineHeart />
                        <p>Save</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
