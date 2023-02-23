export default function TypeFilter() {
    return (
        <div className='type-filter'>
            <h5>Type of place</h5>
            <div className='type-filter-inputs'>
                <div className='row'>
                    <input type='checkbox' name='' id='' />
                    <div className='col'>
                        <p className='input-header'>Entire place</p>
                        <p className='desc'>A place all to yourself</p>
                    </div>
                </div>
                <div className='row'>
                    <input type='checkbox' name='' id='' />
                    <div className='col'>
                        <p className='input-header'>Private room</p>
                        <p className='desc'>our own room in a home or a hotel, plus some shared common spaces</p>
                    </div>
                </div>
                <div className='row'>
                    <input type='checkbox' name='' id='' />
                    <div className='col'>
                        <p className='input-header'>Shared room</p>
                        <p className='desc'>A sleeping space and common areas that may be shared with others</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
