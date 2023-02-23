import { useEffect, useRef, useState } from 'react'
import Filters from './cmps/Filters'
import Navbar from './cmps/Navbar'
import Stays from './cmps/Stays'
import { stayService } from '../../services/stays.service'
import { utilService } from '../../services/util.service'
import { IFilterBy } from '../../interfaces/filter-by-interface'

interface ISkeletonStay {
    type: string
    _id: string
}

export default function Home() {
    let [stays, setStays] = useState<any[]>(getSkeletonStays())
    const [filterBy, setFilterBy] = useState<IFilterBy>({
        selectedFilter: '',
        minPrice: 20,
        maxPrice: 1000,
        type: { entirePlace: false, privateRoom: false, SharedRoom: false },
    })
    const currentStayPagination = useRef(0)

    useEffect(() => {
        getStays()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getStays() {
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
    function onFilter(filterBy: IFilterBy): void {
        currentStayPagination.current = 0
        stays = []
        getStays()
    }

    return (
        <div className='main-layout'>
            <Navbar />
            <Filters onFilter={onFilter} filterBy={filterBy} setFilterBy={setFilterBy} />
            <Stays stays={stays} getStays={getStays} />
        </div>
    )
}
