interface Props {
    name: string
    rating: number
}

export default function StayReviewBar({ name, rating }: Props) {
    const barWidth = `${(rating / 5) * 100}%`
    console.log(barWidth)

    return (
        <div className='stay-review-bar'>
            <p>{name}</p>
            <div className='bar-wrapper'>
                <div className='bar'>
                    <div className='bar-complete' style={{ width: barWidth }}></div>
                </div>
                <p>{rating.toFixed(1)}</p>
            </div>
        </div>
    )
}
