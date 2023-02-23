import { useRef } from 'react'
import StayPreview from './StayPreview'
import StaySkeleton from './StaySkeleton'

export default function Stays({ stays, getStays }: any) {
    const firstSkeletonRef = useRef<HTMLDivElement>(null)
    let isFirstSkelton = true

    function onMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    getStays()
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.3 } // Trigger when element is 50% visible
        )

        if (firstSkeletonRef.current) {
            // console.log('OBSERVING')

            observer.observe(firstSkeletonRef.current)
        }

        return () => {
            if (firstSkeletonRef.current) {
                observer.unobserve(firstSkeletonRef.current)
            }
        }
    }

    return (
        <div className='stays'>
            {stays.map((stay: any) => {
                if (stay.type === 'skeleton') {
                    if (isFirstSkelton) {
                        isFirstSkelton = false
                        return <StaySkeleton key={stay._id} firstSkeletonRef={firstSkeletonRef} onMount={onMount} />
                    } else {
                        return <StaySkeleton key={stay._id} />
                    }
                } else {
                    return <StayPreview stay={stay} key={stay._id} />
                }
            })}
        </div>
    )
}
