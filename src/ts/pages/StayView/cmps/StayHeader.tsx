import { FiShare } from 'react-icons/fi'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'

export default function StayHeader() {
    // getting the rating for the stay by going over the arr of reviews
    // reducing it and dividing by total reviews length
    // const rating =
    //     stay.reviews.reduce((acc: number, review: any) => {
    //         const values: number[] = Object.values(review.moreRate)
    //         const average = values.reduce((sum, value) => sum + value, 0) / values.length

    //         return acc + average
    //     }, 0) / stay.reviews.length

    return (
        <div className='stay-header'>
            <h1>Almhütte Hausberger</h1>
            <div className='row'>
                <div className='about'>
                    <p>
                        <AiFillStar color='black' />
                    </p>
                    <p>4.99</p>
                    <p> · </p>
                    <p className='underline'>123 reviews</p>
                    <p> · </p>
                    <p> ❣ </p>
                    <p className='superhost'>Superhost</p>
                    <p> · </p>
                    <p className='underline'>Mörtschach, Kärnten, Austria</p>
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
