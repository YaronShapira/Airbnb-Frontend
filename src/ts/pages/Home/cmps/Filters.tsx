import React, { useEffect, useRef, useState } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import Filter from './Filter'
import { stayService } from '../../../services/stays.service'
import MoreFilters from './MoreFilters'
const moreFiltersIconSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676833536/Airbnb/temp_dc7cvq.svg'
const filters = stayService.getFilters()

interface Props {
    selectedFilter: string
    onFilter: (selectedFilter: string) => void
}

export default function Filters({ selectedFilter, onFilter }: Props) {
    const [isFullyScrolledRight, setIsFullyScrolledRight] = useState<boolean>(false)
    const [isFullyScrolledLeft, setIsFullyScrolledLeft] = useState<boolean>(true)
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(true)

    const filterPlacesRef = useRef<HTMLInputElement>(null)

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
            setIsFullyScrolledRight(
                Math.round(filterPlacesRef.current?.scrollLeft) ===
                    Math.round(filterPlacesRef.current?.scrollWidth - filterPlacesRef.current?.clientWidth)
            )
            setIsFullyScrolledLeft(filterPlacesRef.current?.scrollLeft === 0)
        }
    }
    function onToggleFilters() {
        setIsFiltersOpen(prevState => !prevState)
    }
    return (
        <div className='filters'>
            <div className={`left-container ${isFullyScrolledLeft ? 'hide-arrow' : ''}`}>
                <button
                    className={`left ${isFullyScrolledLeft ? 'hide-arrow' : ''}`}
                    onClick={() => onScrollFilters(-1)}
                >
                    <BiChevronLeft fontSize={'1.2rem'} />
                </button>
            </div>

            <div className='disable-scrollbar filter-places' ref={filterPlacesRef}>
                {filters.map((filter, idx) => {
                    return <Filter filter={filter} key={idx} selectedFilter={selectedFilter} onFilter={onFilter} />
                })}
            </div>
            <div className='btns'>
                <button
                    className={`right ${isFullyScrolledRight ? 'hide-arrow' : ''}`}
                    onClick={() => onScrollFilters(1)}
                >
                    <BiChevronRight fontSize={'1.2rem'} />
                </button>
                <button className='more-filters' onClick={() => setIsFiltersOpen(true)}>
                    <img src={moreFiltersIconSrc} alt='' />
                    <p>Filters</p>
                </button>
            </div>
            {isFiltersOpen && <MoreFilters onToggleFilters={onToggleFilters} />}
        </div>
    )
}
