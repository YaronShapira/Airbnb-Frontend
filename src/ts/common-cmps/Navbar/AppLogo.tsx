import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/logo/logo.svg'

export default function AppLogo() {
    const navigate = useNavigate()

    function onLogo() {
        navigate('/Airbnb-Frontend')
    }
    return <img src={logo} alt='My Logo' className='logo' onClick={onLogo} />
}
