import { Link } from 'react-router-dom';
import './style.css'
const Header = () => {

    return (
        <div>
            <header>
                <Link className='logo' to='/'>Movieflix</Link>
                <Link className='favorites' to='/favorites'>Favorites</Link>
            </header>
        </div>
    )
}

export default Header;