import { Component } from 'react';

import Header from '../header/header';
import About from '../about/about';
import HomeList from '../homeList/home-list';
import Footer from '../footer/footer';



import './App.scss';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: {
                title: 'Everything You Love About Coffee',
                subtitle: 'header__subtitle',
                clazz: 'header__block',
                line: 'coffeline',
                button: 'header__button',
                bgImg: 'header'
            },
            about:{
                titleAbout: 'About Us',
                subtitleAbout: `
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.
                `,
                aboutImg: 'about__img-none',
                clazzSubtitle: 'about__subtitle'
            },
            listHome: {
                clazzList: 'main'
            }
            
        }
        this.data = {
            clazz: {
                headerHome: 'header__block',
                headerShop: 'header__shop-block',
                headerCoffe: 'header__coffe-block',
                aboutHome: 'about__img-none',
                aboutShop: 'about__img-shop',
                aboutCoffe: 'about__img-coffe',
                aboutItem: '',
                aboutSubtitleHome: 'about__subtitle',
                aboutSubtitleShop: 'about__subtitle-shop',
                aboutSubtitleCoffe: 'about__subtitle-coffe',
                homeListVisible: 'main',
                homeListNone: 'main__none',
            },
            title: {
                pageHome: 'Everything You Love About Coffee',
                pageShop: 'Our Coffe',
                pageCoffe: 'For your pleasure',
                aboutHome: 'About Us',
                aboutShop: 'About our beans',
                aboutCoffe: 'About our goods',
                aboutItem: 'About It',
            },
            subtitle: {
                visible: 'header__subtitle',
                none: 'header__subtitle-none',
                aboutHome: `
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        \n
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                `,
                aboutShop: `
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                `,
                aboutCoffe: `
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                `,
            },
            line: {
                visible: 'coffeline',
                none: 'none-coffeline'
            },
            button: {
                visible: 'header__button',
                none: 'header__button-none'
            },
            bgImg: {
                pageHome: 'header',
                pageShop: 'header-shop',
                pageCoffe: 'header-coffe'
            }

        }
    }
    
    onNavChange = (name) => { 
        const {line, title, clazz, subtitle, button, bgImg} = this.data
        if(name === clazz.headerHome ) {
            this.setState({
                header: {
                    clazz:name,
                    title: title.pageHome,
                    subtitle: subtitle.visible,
                    line: line.visible,
                    button: button.visible,
                    bgImg: bgImg.pageHome
                },
                about: {
                    titleAbout:title.aboutHome,
                    subtitleAbout: subtitle.aboutHome,
                    aboutImg: clazz.aboutHome,
                    clazzSubtitle: clazz.aboutSubtitleHome,
                },
                listHome: {
                    clazzList: clazz.homeListVisible
                }
                
            });
        } else if ( name === clazz.headerShop ) {
            this.setState({
                header: {
                    clazz:name,
                    title: title.pageShop,
                    subtitle: subtitle.none,
                    line: line.none,
                    button: button.none,
                    bgImg: bgImg.pageShop
                },
                about: {
                    titleAbout:title.aboutShop,
                    subtitleAbout: subtitle.aboutShop,
                    aboutImg: clazz.aboutShop,
                    clazzSubtitle: clazz.aboutSubtitleShop,
                },
                listHome: {
                    clazzList: clazz.homeListNone
                }
            });
        } else if ( name === clazz.headerCoffe ) {
            this.setState({
                header: {
                    clazz:name,
                    title: title.pageCoffe,
                    subtitle: subtitle.none,
                    line: line.none,
                    button: button.none,
                    bgImg: bgImg.pageCoffe
                },
                about: {
                    titleAbout:title.aboutCoffe,
                    subtitleAbout: subtitle.aboutCoffe,
                    aboutImg: clazz.aboutCoffe,
                    clazzSubtitle: clazz.aboutSubtitleShop,
                },
                listHome: {
                    clazzList: clazz.homeListNone
                }
            });
        }
    }

    render() {
        const{clazz, title, line, subtitle, button, bgImg} = this.state.header;
        const{titleAbout, subtitleAbout, aboutImg, clazzSubtitle} =  this.state.about;
        const{clazzList} = this.state.listHome
        return (
            <div className="App">
                <Header 
                    clazz={clazz} 
                    title={title}
                    line={line}
                    subtitle={subtitle}
                    button={button}
                    bgImg={bgImg}
                    onNavChange={this.onNavChange}/>
                <About 
                    title={titleAbout}
                    subtitle={subtitleAbout}
                    clazz={aboutImg}
                    clazzSubtitle={clazzSubtitle}/>
                <HomeList
                    clazz={clazzList}
                    onNavChange={this.onNavChange}/>

                <Footer
                    onNavChange={this.onNavChange}/>
            </div>
            
        );
    }

}

export default App;
