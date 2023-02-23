import React, { useRef, useState } from 'react'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
import Filter from './Filter'
import { stayService } from '../../../services/stays.service'
import MoreFilters from './MoreFilters'
import { IFilterBy } from '../../../interfaces/filter-by-interface'
const moreFiltersIconSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676833536/Airbnb/temp_dc7cvq.svg'
const filters = stayService.getFilters()

interface Props {
    onFilter: (filterBy: IFilterBy) => void
    filterBy: IFilterBy
    setFilterBy: React.Dispatch<React.SetStateAction<IFilterBy>>
}

export default function Filters({ onFilter, filterBy, setFilterBy }: Props) {
    const [isFullyScrolledRight, setIsFullyScrolledRight] = useState<boolean>(false)
    const [isFullyScrolledLeft, setIsFullyScrolledLeft] = useState<boolean>(true)
    const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false)
    // const [filterBy, setFilterBy] = useState<IFilterBy>({
    //     selectedFilter: '',
    //     minPrice: 20,
    //     maxPrice: 1000,
    //     type: { entirePlace: false, privateRoom: false, SharedRoom: false },
    // })

    const filterPlacesRef = useRef<HTMLInputElement>(null)

    function onScrollFilters(direction: number) {
        if (filterPlacesRef.current) {
            filterPlacesRef.current.scrollLeft += 1000 * direction
            setTimeout(() => {
                calcIsFullyScrolled()
            }, 600)
        }
    }
    function calcIsFullyScrolled(): void {
        if (filterPlacesRef.current) {
            setIsFullyScrolledRight(
                Math.round(filterPlacesRef.current?.scrollLeft) ===
                    Math.round(filterPlacesRef.current?.scrollWidth - filterPlacesRef.current?.clientWidth)
            )
            setIsFullyScrolledLeft(filterPlacesRef.current?.scrollLeft === 0)
        }
    }
    function onToggleFilters(): void {
        setIsFiltersOpen(prevState => !prevState)
    }
    function onSelectFilter(selectedFilter: string): void {
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, selectedFilter }))
    }

    function onFilterMiddleware(): void {
        setIsFiltersOpen(false)
        onFilter(filterBy)
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
                    return (
                        <Filter
                            filter={filter}
                            key={idx}
                            selectedFilter={filterBy.selectedFilter}
                            onSelectFilter={onSelectFilter}
                        />
                    )
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
            {isFiltersOpen && (
                <MoreFilters
                    onToggleFilters={onToggleFilters}
                    onFilterMiddleware={onFilterMiddleware}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                />
            )}
        </div>
    )
}
