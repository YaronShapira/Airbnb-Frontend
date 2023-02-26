import { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../../services/stays.service'
import Navbar from '../../common-cmps/Navbar/Navbar'
import StayHeader from './cmps/StayHeader'
import StayGallery from './cmps/StayGallery'
import StayInfo from './cmps/StayInfo'
import StayReserve from './cmps/StayReserve'
import StayReviews from './cmps/StayReviews'
import StayMap from './cmps/StayMap'
import StayHost from './cmps/StayHost'
import StayThingsToKnow from './cmps/StayThingsToKnow'
import StayFooter from './cmps/StayFooter'

export default function StayView() {
    const [stay, setStay] = useState({ type: 'skeleton' })
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(stay)

    useEffect(() => {
        getStay()
    }, [])

    async function getStay() {
        try {
            if (id) {
                const stay = await stayService.getStay(id)
                setStay(stay)
            } else {
                navigate('/')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='stay-view-layout'>
            <Navbar />
            <StayHeader />
            <StayGallery />
            <div className='grid'>
                <StayInfo />
                <StayReserve />
            </div>
            <StayReviews />
            <StayMap />
            <StayHost />
            <StayThingsToKnow />
            <StayFooter />
        </div>
    )
}
