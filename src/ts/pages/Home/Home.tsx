import { useEffect, useRef, useState } from 'react'
import Filters from './cmps/Filters'
import Navbar from '../../common-cmps/Navbar/Navbar'
import Stays from './cmps/Stays'
import { stayService } from '../../services/stays.service'
import { utilService } from '../../services/util.service'
import { IFilterBy } from '../../interfaces/filter-by-interface'
import NoStaysMessage from './cmps/NoStaysMessage'
import { useNavigate } from 'react-router-dom'
import { ISkeletonStay, IStay } from '../../interfaces/stay-interface'

export default function Home() {
    let [stays, setStays] = useState<IStay[] | ISkeletonStay[]>(getSkeletonStays())
    const [filterBy, setFilterBy] = useState<IFilterBy>(stayService.getEmptyFilterBy())
    const currentStayPagination = useRef(0)

    const navigate = useNavigate()

    useEffect(() => {
        getStays()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getStays() {
        console.log(filterBy)
        let newStays = await stayService.getStays(currentStayPagination.current, filterBy)
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
        for (let i = 0; i < 20; i++) {
            res.push({ type: 'skeleton', _id: utilService.makeId() })
        }
        return res
    }
    function onFilter(): void {
        currentStayPagination.current = 0
        stays = []
        setStays(getSkeletonStays())
        getStays()
    }

    function onRemoveFilter() {
        setFilterBy(stayService.getEmptyFilterBy())
        onFilter()
    }

    function onStay(_id: string) {
        navigate(`stays/${_id}`)
    }

    return (
        <div className='main-layout'>
            <Navbar />
            <Filters onFilter={onFilter} filterBy={filterBy} setFilterBy={setFilterBy} />
            {stays.length && <Stays stays={stays} getStays={getStays} onStay={onStay} />}
            {!stays.length && <NoStaysMessage onRemoveFilter={onRemoveFilter} />}
        </div>
    )
}
