import { useEffect, useRef, useState } from 'react'
import Filters from './cmps/Filters'
import Navbar from './cmps/Navbar'
import Stays from './cmps/Stays'
import { stayService } from '../../services/stays.service'
import { utilService } from '../../services/util.service'
import { IFilterBy } from '../../interfaces/filter-by-interface'
import NoStaysMessage from './cmps/NoStaysMessage'

interface ISkeletonStay {
    type: string
    _id: string
}

export default function Home() {
    let [stays, setStays] = useState<any[]>(getSkeletonStays())
    const [filterBy, setFilterBy] = useState<IFilterBy>(stayService.getEmptyFilterBy())
    const currentStayPagination = useRef(0)

    useEffect(() => {
        getStays()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getStays() {
        console.log(filterBy)
        let newStays = await stayService.getStays(currentStayPagination.current, filterBy)
        // Clean all skeletons
        const filteredStays = stays.filter(stay => stay.name)
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

    return (
        <div className='main-layout'>
            <Navbar />
            <Filters onFilter={onFilter} filterBy={filterBy} setFilterBy={setFilterBy} />
            {stays.length && <Stays stays={stays} getStays={getStays} />}
            {!stays.length && <NoStaysMessage onRemoveFilter={onRemoveFilter} />}
        </div>
    )
}
