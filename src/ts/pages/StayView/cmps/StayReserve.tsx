export default function StayReserve() {
    return (
        <div className='stay-reserve'>
            <div className='pricing'>
                <h3>$32,580</h3>
                <p>night</p>
            </div>
            <div className='reserve-picker'>
                <div className='dates'>
                    <div className='date-pick check-in'>
                        <p className='heading'>Check-in</p>
                        <p className='info'>5/7/2023</p>
                    </div>
                    <div className='date-pick check-out'>
                        <p className='heading'>Check-out</p>
                        <p className='info'>12/7/2023</p>
                    </div>
                </div>
                <div className='guests'>
                    <p className='heading'>Guests</p>
                    <p className='info'>1 guest</p>
                </div>
            </div>
            <button className='reserve-btn'>Reserve</button>
            <p className='disclaimer'>You won't be charged yet</p>
            <div className='pricing-summary'>
                <div className='row'>
                    <p>$32,580 x 3 nights</p>
                    <p>$97,739</p>
                </div>
                <div className='row'>
                    <p>Taxes</p>
                    <p>$23</p>
                </div>
            </div>
            <div className='total'>
                <p>Total</p>
                <p>$97,762</p>
            </div>
        </div>
    )
}
