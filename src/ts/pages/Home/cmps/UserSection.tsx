import { RiGlobalLine } from 'react-icons/ri'
const hamburgerBarsSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822362/Airbnb/temp_1_au1jus.png'
const userProfileSrc = 'https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822576/Airbnb/temp_3_b1go8l.png'

export default function UserSection() {
    return (
        <div className='user-section'>
            <button className='airbnb-cta'>Airbnb your home</button>
            <button className='language'>
                <RiGlobalLine fontSize={'19px'} />
            </button>
            <button className='user-open-modal'>
                <img src={hamburgerBarsSrc} alt='' />
                <img src={userProfileSrc} alt='' />
            </button>
        </div>
    )
}
