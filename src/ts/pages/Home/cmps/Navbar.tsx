import { RiGlobalLine } from 'react-icons/ri'
import { IoMdMenu } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import AppLogo from '../../../cmps/AppLogo'
import Search from './Search'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <AppLogo />
            <Search />
            <div className='user-section'>
                <button className='airbnb-cta'>Airbnb your home</button>
                <button className='language'>
                    <RiGlobalLine fontSize={'19px'} />
                </button>
                <button className='user-open-modal'>
                    <img
                        src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822362/Airbnb/temp_1_au1jus.png'
                        alt=''
                    />
                    <img
                        src='https://res.cloudinary.com/yaronshapira-com/image/upload/v1676822576/Airbnb/temp_3_b1go8l.png'
                        alt=''
                    />
                </button>
            </div>
        </nav>
    )
}
