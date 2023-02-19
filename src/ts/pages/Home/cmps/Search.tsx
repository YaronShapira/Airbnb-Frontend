import { useEffect, useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import FilterDatePicker from './FilterDatePicker'
import FilterGuests from './FilterGuests'
import { FilterLocation } from './FilterLocation'

export default function Search() {
    return (
        <div className='search'>
            <p>Anywhere</p>
            <div className='seperator'></div>
            <p>Any week</p>
            <div className='seperator'></div>
            <p className='guests'>Add guests</p>
            <div className='search-icon'>
                <BiSearch />
            </div>
        </div>
    )
}
