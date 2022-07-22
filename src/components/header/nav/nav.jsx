import './nav.scss';

const Nav = ({onNavChange})  => {
    const navChange = (e) => {
        const name = e.target.attributes["name"].value
        onNavChange(name)
    }

    return (
        <nav className='nav'>
            <ul className='nav__item'>
                <li className='nav__item-link' id='nav-link' name='header__block' onClick={navChange}><div name='header__block' onClick={navChange} className='logo'></div>Coffee house</li>
                <li className='nav__item-link'id='nav-links' name='header__shop-block' onClick={navChange}>butt Our coffee</li>
                <li className='nav__item-link' id='nav-linka' name='header__coffe-block' onClick={navChange}>For your pleasure</li>
            </ul>
        </nav>
    )
}

export default Nav;