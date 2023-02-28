import Navbar from '../../../../common-cmps/Navbar/Navbar'
import StayInfoHeader from '../StayInfo/StayInfoHeader'
import StaySkeletonGallery from './StaySkeletonGallery'
import StaySkeletonHeader from './StaySkeletonHeader'
import StaySkeletonInfoHeader from './StaySkeletonInfoHeader'
import StaySkeletonReserve from './StaySkeletonReserve'

export default function StaySkeletonView() {
    return (
        <div className='stay-view-layout stay-skeleton-view'>
            <Navbar />
            <StaySkeletonHeader />
            <StaySkeletonGallery />
            <div className='stay-view-separator'>
                <StaySkeletonInfoHeader />
                <StaySkeletonReserve />
            </div>
        </div>
    )
}
