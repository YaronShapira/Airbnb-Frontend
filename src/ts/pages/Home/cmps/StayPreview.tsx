export default function StayPreview({ stay }: any) {
    return (
        <div>
            <article className='stay-preview'>
                <img src={stay.imgUrls[0]} alt='' />
                {/* <ImgCarousel imgUrls={stay.imgUrls} /> */}
                <div className='details'>
                    <p className='address'>{stay.loc.address}</p>
                    <p className='type'>{stay.type}</p>
                    <p className="available">Jul 22 - 29</p>
                    <p className='price'>
                        ${stay.price} <span className='prefix'>night</span>
                    </p>
                </div>
            </article>
        </div>
    )
}
