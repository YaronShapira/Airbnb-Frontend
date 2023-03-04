const mapIconSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1677943010/Airbnb/temp_bdexnj.svg'
const listIconSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1677943662/Airbnb/temp_iqkxxd.svg'

interface Props {
    isMapOpened: boolean
    onClickMap: () => void
}

export default function MapButton({ isMapOpened, onClickMap }: Props) {
    return (
        <button className='map-button' onClick={onClickMap}>
            {isMapOpened ? (
                <>
                    <p>Show list</p>
                    <img src={listIconSrc} alt='' />{' '}
                </>
            ) : (
                <>
                    <p>Show map</p>
                    <img src={mapIconSrc} alt='' />{' '}
                </>
            )}
        </button>
    )
}
