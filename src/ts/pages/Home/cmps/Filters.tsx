import React, { useEffect, useRef, useState } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import Filter from './Filter'
import { stayService } from '../../../services/stays.service'
const filters = stayService.getFilters()

export default function Filters() {
    const filterPlacesRef = useRef<HTMLInputElement>(null)
    const [animationId, setAnimationId] = useState<number | null>(null)
    const [isFullyScrolledRight, setIsFullyScrolledRight] = useState<Boolean>(false)
    const [isFullyScrolledLeft, setIsFullyScrolledLeft] = useState<Boolean>(true)

    function onScrollFilters(direction: number) {
        if (filterPlacesRef.current) {
            filterPlacesRef.current.scrollLeft += 1000 * direction
            setTimeout(() => {
                calcIsFullyScrolled()
            }, 600)
        }
    }
    function calcIsFullyScrolled() {
        if (filterPlacesRef.current) {
            console.log('filterPlacesRef.current?.scrollLeft:', filterPlacesRef.current?.scrollLeft)
            console.log(
                'filterPlacesRef.current?.scrollWidth - filterPlacesRef.current?.clientWidth:',
                filterPlacesRef.current?.scrollWidth - filterPlacesRef.current?.clientWidth
            )

            setIsFullyScrolledRight(
                Math.round(filterPlacesRef.current?.scrollLeft) ===
                    Math.round(filterPlacesRef.current?.scrollWidth - filterPlacesRef.current?.clientWidth)
            )
            setIsFullyScrolledLeft(filterPlacesRef.current?.scrollLeft === 0)
        }
    }
    return (
        <div className='filters'>
            <div className='left-container'>
                <button
                    className={`left ${isFullyScrolledLeft ? 'hide-arrow' : ''}`}
                    onClick={() => onScrollFilters(-1)}
                >
                    <BiChevronLeft fontSize={'1.2rem'} />
                </button>
            </div>

            <div className='disable-scrollbar filter-places' ref={filterPlacesRef}>
                {filters.map((filter, idx) => {
                    return <Filter filter={filter} key={idx} />
                })}
            </div>
            <div className='btns'>
                <button
                    className={`right ${isFullyScrolledRight ? 'hide-arrow' : ''}`}
                    onClick={() => onScrollFilters(1)}
                >
                    <BiChevronRight fontSize={'1.2rem'} />
                </button>
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
