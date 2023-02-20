import { useEffect } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import Filter from './Filter'
import { stayService } from '../../../services/stays.service'
const filters = stayService.getFilters()

export default function Filters() {
    useEffect(() => {}, [])
    return (
        <div className='filters'>
            <div className='disable-scrollbar filter-places'>
                <button className='left'>
                    <BiChevronLeft fontSize={'1.2rem'} />
                </button>
                {filters.map((filter, idx) => {
                    return <Filter filter={filter} key={idx} />
                })}
                <button className='right'>
                    <BiChevronRight fontSize={'1.2rem'} />
                </button>
            </div>
            <div className='btns'>
                <button className='more-filters'>
                    <img
                        src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1676833536/Airbnb/temp_dc7cvq.svg'
                        alt=''
                    />
                    <p>Filters</p>
                </button>
            </div>
        </div>
    )
}
