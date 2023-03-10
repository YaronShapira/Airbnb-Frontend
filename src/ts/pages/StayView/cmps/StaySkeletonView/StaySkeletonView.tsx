import Navbar from '../../../../common-cmps/Navbar/Navbar'
import StaySkeletonGallery from './StaySkeletonGallery'
import StaySkeletonHeader from './StaySkeletonHeader'
import StaySkeletonInfoHeader from './StaySkeletonInfoHeader'
import StaySkeletonReserve from './StaySkeletonReserve'

export default function StaySkeletonView() {
    return (
        <div className='stay-view-layout stay-skeleton-view'>
            <Navbar />
            <div className='heading'>
                <StaySkeletonHeader />
                <StaySkeletonGallery />
            </div>
            <div className='stay-view-separator'>
                <StaySkeletonInfoHeader />
                <StaySkeletonReserve />
            </div>
        </div>
    )
}
