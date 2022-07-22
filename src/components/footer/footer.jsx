import './footer.scss'
import Nav from '../header/nav/nav';

const Footer = ({onNavChange}) => {
    return(
        <footer className='footer'>
            <div className='footer__block'>
                <div className='footer__nav'>
                    <Nav 
                        onNavChange={onNavChange}
                        />
                </div>
                <div className="coffeline-black"></div>
            </div>
        </footer>
    )
}

export default Footer;