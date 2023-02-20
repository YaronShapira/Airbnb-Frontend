import { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import FilterDatePicker from './FilterDatePicker'
import FilterGuests from './FilterGuests'
import { FilterLocation } from './FilterLocation'

interface Props {
    onToggleSearch: () => void
    isSearchOpen: boolean
}

export default function SearchTeaser({ onToggleSearch, isSearchOpen }: Props) {
    return (
        <div className={`search-teaser ${isSearchOpen ? 'search-teaser-hide' : ''}`} onClick={onToggleSearch}>
            <p>Anywhere</p>
            <div className='seperator'></div>
            <p>Any week</p>
            <div className='seperator'></div>
            <p className='guests'>Add guests</p>
            <div className='search-icon'>
                <BiSearch fontSize={'16px'} />
            </div>
        </div>
    )
}
