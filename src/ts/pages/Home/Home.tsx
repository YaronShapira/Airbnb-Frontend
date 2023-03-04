import { useEffect, useRef, useState } from 'react'
import { stayService } from '../../services/stays.service'
import { utilService } from '../../services/util.service'
import { IFilterBy } from '../../interfaces/filter-by-interface'
import { useLocation, useNavigate } from 'react-router-dom'
import { ISkeletonStay, IStay } from '../../interfaces/stay-interface'
import NoStaysMessage from './cmps/NoStaysMessage'
import MapButton from './cmps/MapButton'
import Filters from './cmps/Filters'
import Navbar from '../../common-cmps/Navbar/Navbar'
import Stays from './cmps/Stays'
import StaysMapListings from './cmps/StaysMapListings'
import { useSelector } from 'react-redux'
import { ISearchBy } from '../../interfaces/search-by-interface'
import { setSearchBy } from '../../store/stay/stay.action'

const NUM_OF_SKELETONS = 20

export default function Home() {
    let [stays, setStays] = useState<IStay[] | ISkeletonStay[]>(getSkeletonStays())
    const [isMapOpened, setIsMapOpened] = useState<boolean>(false)
    const [filterBy, setFilterBy] = useState<IFilterBy>(stayService.getEmptyFilterBy())
    const currentStayPagination = useRef(0)
    const { search } = useLocation()

    useEffect(() => {
        onGetNewStays()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const navigate = useNavigate()

    const searchBy: ISearchBy = stayService.getSearchByFromParams()

    async function getStays() {
        let newStays = await stayService.getStays(currentStayPagination.current, filterBy, searchBy)
        // Clean all skeletons
        const filteredStays = (stays as IStay[]).filter((stay: IStay) => stay.name)
        if (!newStays.length) {
            // No new stays so no need for skeletons
            setStays([...filteredStays, ...newStays])
        } else {
            setStays([...filteredStays, ...newStays, ...getSkeletonStays()])
            currentStayPagination.current++
        }
    }

    function getSkeletonStays(): ISkeletonStay[] {
        const res = []
        for (let i = 0; i < NUM_OF_SKELETONS; i++) {
            res.push({ type: 'skeleton', _id: utilService.makeId() })
        }
        return res
    }

    function onGetNewStays(): void {
        currentStayPagination.current = 0
        stays = []
        setStays(getSkeletonStays())
        getStays()
    }

    function onRemoveFilter() {
        setFilterBy(stayService.getEmptyFilterBy())
        onGetNewStays()
    }

    function onStay(_id: string, startDate: Date, endDate: Date) {
        searchBy.checkIn = new Date(startDate)
        searchBy.checkOut = new Date(endDate)
        setSearchBy(searchBy)
        navigate(`stays/${_id}`)
    }

    async function onClickMap() {
        setIsMapOpened(prev => !prev)
        if (isMapOpened) {
            onGetNewStays()
        } else {
            const stays = await stayService.getAllStays()
            setStays(stays)
        }
    }

    return (
        <div className='main-layout home no-scroll'>
            <Navbar />
            <Filters onFilter={onGetNewStays} filterBy={filterBy} setFilterBy={setFilterBy} />
            {!isMapOpened && stays.length > 0 && <Stays stays={stays} getStays={getStays} onStay={onStay} />}
            {!isMapOpened && stays.length <= 0 && <NoStaysMessage onRemoveFilter={onRemoveFilter} />}
            <MapButton isMapOpened={isMapOpened} onClickMap={onClickMap} />
            {isMapOpened && (
                <StaysMapListings stays={stays.filter(stay => stay.type !== 'skeleton') as IStay[]} onStay={onStay} />
            )}
        </div>
    )
}
