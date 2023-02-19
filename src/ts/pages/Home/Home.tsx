import Filters from './cmps/Filters'
import Navbar from './cmps/Navbar'

export default function Home() {
    return (
        <div className='main-layout'>
            <Navbar />
            <Filters />
        </div>
    )
}
