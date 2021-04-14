import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    FinCamp<i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu} >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/impact' className='nav-links' onClick={closeMobileMenu} >
                            Impact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/market' className='nav-links' onClick={closeMobileMenu} >
                            Market Place
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu} >
                        <i className="fas fa-shopping-cart"></i> Cart
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/signUp' className='nav-links' onClick={closeMobileMenu} >
                        <i className="fas fa-user"></i>SignUp
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar
