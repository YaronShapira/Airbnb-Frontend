import { IFilterBy } from '../../../interfaces/filter-by-interface'

interface Props {
    filterBy: IFilterBy
    setFilterBy: React.Dispatch<React.SetStateAction<IFilterBy>>
}

export default function TypeFilter({ filterBy, setFilterBy }: Props) {
    function handleCheckbox(ev: React.ChangeEvent<HTMLInputElement>) {
        const field = ev.target.name
        setFilterBy(prevFilterBy => ({ ...prevFilterBy, type: { ...prevFilterBy.type, [field]: ev.target.checked } }))
    }
    return (
        <div className='type-filter'>
            <h5>Type of place</h5>
            <div className='type-filter-inputs'>
                <div className='row'>
                    <input
                        type='checkbox'
                        name='entirePlace'
                        id=''
                        checked={filterBy.type.entirePlace}
                        onChange={handleCheckbox}
                    />
                    <div className='col'>
                        <p className='input-header'>Entire place</p>
                        <p className='desc'>A place all to yourself</p>
                    </div>
                </div>
                <div className='row'>
                    <input
                        type='checkbox'
                        name='privateRoom'
                        id=''
                        checked={filterBy.type.privateRoom}
                        onChange={handleCheckbox}
                    />
                    <div className='col'>
                        <p className='input-header'>Private room</p>
                        <p className='desc'>our own room in a home or a hotel, plus some shared common spaces</p>
                    </div>
                </div>
                <div className='row'>
                    <input
                        type='checkbox'
                        name='SharedRoom'
                        id=''
                        checked={filterBy.type.SharedRoom}
                        onChange={handleCheckbox}
                    />
                    <div className='col'>
                        <p className='input-header'>Shared room</p>
                        <p className='desc'>A sleeping space and common areas that may be shared with others</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
