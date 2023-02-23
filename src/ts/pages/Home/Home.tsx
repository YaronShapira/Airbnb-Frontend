import { useEffect, useRef, useState } from 'react'
import Filters from './cmps/Filters'
import Navbar from './cmps/Navbar'
import Stays from './cmps/Stays'
import { stayService } from '../../services/stays.service'
import { utilService } from '../../services/util.service'

interface IFilterBy {
    selectedFilter: string
    minPrice: number
    maxPrice: number
    type: {
        entirePlace: boolean
        privateRoom: boolean
        SharedRoom: boolean
    }
}

export default function Home() {
    const [stays, setStays] = useState<any[]>([])
    const [selectedFilter, setSelectedFilter] = useState<string>('')
    const currentStayPagination = useRef(0)
    const [filterBy, setFilterBy] = useState<IFilterBy>({
        selectedFilter: '',
        minPrice: 0,
        maxPrice: 0,
        type: { entirePlace: false, privateRoom: false, SharedRoom: false },
    })

    useEffect(() => {
        getStays()
    }, [])

    async function getStays() {
        let newStays = await stayService.getStays(currentStayPagination.current)
        const filteredStays = stays.filter(stay => stay.name)
        setStays([...filteredStays, ...newStays, ...getSkeletonStays()])
        currentStayPagination.current++
    }
    function getSkeletonStays() {
        const res = []
        for (let i = 0; i < 20; i++) {
            res.push({ type: 'skeleton', _id: utilService.makeId() })
        }
        return res
    }
    function onFilter(selectedFilter: string) {
        setSelectedFilter(selectedFilter)
    }

    return (
        <div className='main-layout'>
            <Navbar />
            <Filters selectedFilter={selectedFilter} onFilter={onFilter} />
            <Stays stays={stays} getStays={getStays} />
        </div>
    )
}
