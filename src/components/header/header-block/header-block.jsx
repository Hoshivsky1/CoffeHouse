import './header-block.scss';



const HeaderBlock = ({title, clazz, line, subtitle, button , onNavChange}) => {
    const navChange = (e) => {
        const name = e.target.attributes["name"].value
        onNavChange(name)
    }
    return (
        <div className={clazz}>
            <div className='header__title'>{title}</div>
            <div className={line}></div>
            <div className={subtitle}>
                We makes every day full of energy and taste<br/>
                Want to try our beans?
            </div>
            <button  name="header__shop-block" onClick={navChange} className={button}>More</button>
        </div>
    )
}

export default HeaderBlock;