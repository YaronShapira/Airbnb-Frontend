import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../../services/stays.service'
import Navbar from '../../common-cmps/Navbar/Navbar'
import StayHeader from './cmps/StayHeader'
import StayGallery from './cmps/StayGallery'
import StayInfo from './cmps/StayInfo/StayInfo'
import StayReserve from './cmps/StayReserve'
import StayReviews from './cmps/StayReviews'
import StayMap from './cmps/StayMap'
import StayHost from './cmps/StayHost'
import StayThingsToKnow from './cmps/StayThingsToKnow'
import StayFooter from './cmps/StayFooter'
import { utilService } from '../../services/util.service'
import { ISkeletonStay, IStay } from '../../interfaces/stay-interface'
import StaySkeletonView from './cmps/StaySkeletonView/StaySkeletonView'
import { ISearchBy } from '../../interfaces/search-by-interface'
import { setSearchBy } from '../../store/stay/stay.action'

export default function StayView() {
    const [stay, setStay] = useState<IStay | ISkeletonStay>(getSkeletonStayView())
    const searchBy: ISearchBy = useSelector((storeState: any) => storeState.stayModule.searchBy)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getStay()
        prepareSearchBy()
    }, [])

    function prepareSearchBy() {
        if (searchBy.adults <= 0) {
            searchBy.adults = 1
            setSearchBy(searchBy)
        }
    }

    function getSkeletonStayView() {
        return { type: 'skeleton', _id: utilService.makeId() }
    }

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
    if (stay.type === 'skeleton') return <StaySkeletonView />
    return (
        <div className='stay-view-layout'>
            <Navbar />
            <div className='heading'>
                <StayHeader stay={stay as IStay} />
                <StayGallery stay={stay as IStay} />
            </div>
            <div className='stay-view-separator'>
                <StayInfo stay={stay as IStay} />
                <StayReserve stay={stay as IStay} searchBy={searchBy} />
            </div>
            <StayReviews stay={stay as IStay} />
            <StayMap stay={stay as IStay} />
            <StayHost stay={stay as IStay} />
            <StayThingsToKnow />
            <StayFooter />
        </div>
    )
}

// add searchBy to redux
// make everything accurate in stay listings
// work on responsiveness of StayView
// add different search teaser for StayView
// work on plain search functionality
// add show map
// add search map
