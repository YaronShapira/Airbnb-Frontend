import { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

interface Props {
    imgUrls: string[]
}

export default function ImgCarousel({ imgUrls }: Props) {
    const [imgIndex, setImgIndex] = useState<number>(0)
    function onNextImage(inc: number) {
        setImgIndex(prevImgIndex => prevImgIndex + inc)
    }
    console.log(imgIndex)

    const carouselSettings = {
        showArrows: false,
        showStatus: false,
        showThumbs: false,
        showIndicators: false,
        selectedItem: imgIndex,
    }

    return (
        <div className='img-carousel'>
            {imgIndex > 0 && (
                <button className='carousel-btn left' onClick={() => onNextImage(-1)}>
                    <BiChevronLeft fontSize={'1.2rem'} />
                </button>
            )}

            <Carousel {...carouselSettings}>
                {imgUrls.map((imgUrl, idx) => {
                    return <img src={imgUrl} alt='' key={idx} />
                })}
            </Carousel>
            {imgIndex < imgUrls.length - 1 && (
                <button className='carousel-btn right'>
                    <BiChevronRight fontSize={'1.2rem'} onClick={() => onNextImage(1)} />
                </button>
            )}
        </div>
    )
}
