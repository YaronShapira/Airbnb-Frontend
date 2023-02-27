import GoogleMapReact from 'google-map-react'
import { IStay } from '../../../interfaces/stay-interface'
import { MdHome } from 'react-icons/md'

interface Props {
    stay: IStay
}

const AnyReactComponent = ({ text }: any) => (
    <div className='map-marker'>
        <div className='circle'>
            <MdHome />
        </div>
    </div>
)

export default function StayMap({ stay }: Props) {
    const props = {
        center: {
            lat: stay.loc.lng,
            lng: stay.loc.lat,
        },
        zoom: 14,
    }

    return (
        <div className='border-bottom stay-map'>
            <h3>Where you'll be</h3>
            <div className='map'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB5mXoA76shI6CK3DmGjZi3M4PMn7YX4WA' }}
                    center={props.center}
                    zoom={props.zoom}
                >
                    <AnyReactComponent lat={props.center.lat} lng={props.center.lng} />
                </GoogleMapReact>
            </div>

            <div className='about'>
                <h5>
                    {stay.loc.country}, {stay.loc.city}
                </h5>
                <p>{stay.summary}</p>
            </div>
        </div>
    )
}
