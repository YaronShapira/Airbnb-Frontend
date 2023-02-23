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
    const [stays, setStays] = useState<any[]>(getSkeletonStays())
    const currentStayPagination = useRef(0)

    useEffect(() => {
        getStays()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getStays() {
        let newStays = await stayService.getStays(currentStayPagination.current)
        const filteredStays = stays.filter(stay => stay.name)
        setStays([...filteredStays, ...newStays, ...getSkeletonStays()])
        currentStayPagination.current++
    }
    function getSkeletonStays(): ISkeletonStay[] {
        const res = []
        for (let i = 0; i < 20; i++) {
            res.push({ type: 'skeleton', _id: utilService.makeId() })
        }
        return res
    }
    function onFilter(filterBy: IFilterBy): void {
        console.log('filterBy:', filterBy)
    }

    return (
        <div className='main-layout'>
            <Navbar />
            <Filters onFilter={onFilter} />
            <Stays stays={stays} getStays={getStays} />
        </div>
    )
}
