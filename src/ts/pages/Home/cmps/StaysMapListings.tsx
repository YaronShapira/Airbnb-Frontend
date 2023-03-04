import GoogleMapReact from 'google-map-react'
import { IStay } from '../../../interfaces/stay-interface'

interface Props {
    stays: IStay[]
    onStay: (_id: string, startDate: Date, endDate: Date) => void
}

const StayPriceOnMap = ({ price, onClickFunc }: any) => (
    <div className='map-marker' onClick={onClickFunc}>
        ${price}
    </div>
)

export default function StaysMapListings({ stays, onStay }: Props) {
    const props = {
        center: {
            lat: 40,
            lng: 40,
        },
        zoom: 2,
    }

    return (
        <div className='stay-map-listings'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB5mXoA76shI6CK3DmGjZi3M4PMn7YX4WA' }}
                center={props.center}
                zoom={props.zoom}
            >
                {stays.map((stay, idx) => {
                    return (
                        <StayPriceOnMap
                            lat={stay.loc.lng}
                            lng={stay.loc.lat}
                            key={idx}
                            price={stay.price}
                            onClickFunc={() => onStay(stay._id, stay.datesForPreview[0], stay.datesForPreview[1])}
                        />
                    )
                })}
            </GoogleMapReact>
        </div>
    )
}
