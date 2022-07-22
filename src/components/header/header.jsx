import Nav from './nav/nav';
import HeaderBlock from './header-block/header-block';
import './header.scss'

const Header = ({title, clazz, line, subtitle, button, bgImg, onNavChange}) => {
    return(
        <header className={bgImg}>
            <div className='container'>
                <Nav onNavChange={onNavChange}/>
                <HeaderBlock 
                    clazz={clazz} 
                    title={title} 
                    line={line}
                    subtitle={subtitle}
                    button={button} 
                    onNavChange={onNavChange}/>
            </div>
            
        </header>
            
    )
}

export default Header;