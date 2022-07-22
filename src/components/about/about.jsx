import './about.scss';

const About = ({title, subtitle, clazz, clazzSubtitle}) => {
    return(
        <main className='about'>
            <div className="about__block">
                <div className="about__title">{title}</div>
                <div className="coffeline-black"></div>
                <div className="about__content">
                    <div className={clazz}></div>
                    <div className={clazzSubtitle}>{subtitle}</div>
                </div>
                <div className="about__line"></div>
            </div>
        </main>
    )
}

export default About;