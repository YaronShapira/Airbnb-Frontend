import { AiOutlineClose } from 'react-icons/ai'
import PriceFilter from './PriceFilter'
import TypeFilter from './TypeFilter'
import StrongDarkOverlay from '../../../cmps/StrongDarkOverlay'

interface Props {
    onToggleFilters: () => void
}

export default function MoreFilters({ onToggleFilters }: Props) {
    return (
        <>
            <div className='modal-filter'>
                <div className='header'>
                    <button className='close'>
                        <AiOutlineClose fontSize={'16px'} />
                    </button>
                    <h4>Filters</h4>
                </div>
                <div className='content'>
                    <PriceFilter />
                    <TypeFilter />
                </div>
                <div className='footer'>
                    <button className='clear'>Clear all</button>
                    <button className='show-homes'>Show homes</button>
                </div>
            </div>
            <StrongDarkOverlay onClickFunc={onToggleFilters} />
        </>
    )
}
