import StayPreview from './StayPreview'

export default function Stays({ stays }: any) {
    return (
        <div className='stays'>
            {stays.map((stay: any) => {
                return <StayPreview stay={stay} key={stay._id} />
            })}
        </div>
    )
}
