import { useEffect, useState } from 'react'
import Filters from './cmps/Filters'
import Navbar from './cmps/Navbar'
import Stays from './cmps/Stays'
import { stayService } from '../../services/stays.service'

export default function Home() {
    const [stays, setStays] = useState<any[]>([])

    useEffect(() => {
        getStays()
    }, [])

    async function getStays() {
        const stays = await stayService.getStays()
        setStays(stays)
    }
    return (
        <div className='main-layout'>
            <Navbar />
            <Filters />
            <Stays stays={stays}/>
        </div>
    )
}
