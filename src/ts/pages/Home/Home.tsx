import { useEffect, useRef, useState } from 'react'
import Filters from './cmps/Filters'
import Navbar from './cmps/Navbar'
import Stays from './cmps/Stays'
import { stayService } from '../../services/stays.service'
import { utilService } from '../../services/util.service'

export default function Home() {
    const [stays, setStays] = useState<any[]>([])
    const [selectedFilter, setSelectedFilter] = useState<string>('')
    

    useEffect(() => {
        getStays()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset
            const windowHeight = window.innerHeight
            const fullHeight = document.body.scrollHeight
            const scrollPercentage = (scrollPosition / (fullHeight - windowHeight)) * 100

            if (scrollPercentage > 50) {
                // console.log('YES')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    

    

    async function getStays() {
        let stays = await stayService.getStays()
        for (let i = 0; i < 20; i++) {
            stays.push({ type: 'skeleton', _id: utilService.makeId() })
        }
        setStays(stays)
    }

    function onFilter(selectedFilter: string) {
        setSelectedFilter(selectedFilter)
    }

    return (
        <div className='main-layout'>
            <Navbar />
            <Filters selectedFilter={selectedFilter} onFilter={onFilter} />
            <Stays stays={stays} />
        </div>
    )
}
