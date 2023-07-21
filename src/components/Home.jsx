// import {useContext, useEffect, useState, useRef} from 'react'
import Icon from '@mdi/react';
import {
    mdiEmailOutline,
    mdiGithub, mdiLinkVariant,
    mdiPhoneOutline,
    mdiWeatherNight,
    mdiWhiteBalanceSunny
} from '@mdi/js';

const moose = new URL('/public/images/48196495.png', import.meta.url).href;
const charitableTaxCalc = new URL('/public/images/charitable-trust-image.png', import.meta.url).href;
const mooseLandscape = new URL('/public/images/moose-mountain.jpg', import.meta.url).href;
const outrunImage = new URL('/public/images/music-outrun.png', import.meta.url).href;
const picStoreImage = new URL('/public/images/pic-store.png', import.meta.url).href;
const weatherImage = new URL('/public/images/weather-app.png', import.meta.url).href;
const battleshipImage = new URL('/public/images/battleship.png', import.meta.url).href;
const taxCalcImage = new URL('/public/images/tax-calc.png', import.meta.url).href



function Home(props) {



    return (
        <>
            <nav>
                <a href="">about</a>
                <a href="">projects</a>
                <a href="">contact</a>
                {props.item.screenMode === 'light-mode' ?
                    <Icon className={"icon"} path={mdiWeatherNight} size={'2rem'}
                onClick={() => props.item.setScreenMode('dark-mode')}
                 /> :
                <Icon className={"icon"} path={mdiWhiteBalanceSunny} size={'2rem'} color={'#ebcb8b'}
                    onClick={() => props.item.setScreenMode('light-mode')}
                />
                }

            </nav>
            <header>
                <section className="profile">
                    <img src={moose} alt="moose"/>
                    <h3 >Moose</h3>
                </section>
                <section className="about-me">
                    <h1>About</h1>
                    <p>This are a few of my favorite personal projects, made with only vanilla javascript and more recently with React.</p>
                    <a className={'link-icon'} href="https://github.com/MooseCapital">
                    <Icon className={"git-icon"} path={mdiGithub} size={1} />

                    </a>
                </section>

            </header>
            <main className={'projects'}>
                <h1>Projects</h1>
                <section className="project">
                    <img className={'project-img'} src={outrunImage} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Outrun music radio</h2>
                        <a href="https://moosecapital.github.io/Outrun-NightDrive/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Outrun-NightDrive" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to GitHub'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For Listening to my favorite Outrun music and setting a nice background
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={charitableTaxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Charitable Remainder Trust Calculator</h2>
                        <a href="https://moosecapital.github.io/-Charitable-Remainder-Trust-Calculator-/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/-Charitable-Remainder-Trust-Calculator-" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to GitHub'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        Calculate Charitable remainder trust payouts compared to selling your asset and being taxed.
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={picStoreImage} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Pic store</h2>
                        <a href="https://moosecapital.github.io/Pic-some-react-project/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Pic-some-react-project" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to GitHub'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        Simulate a shopping cart and checkout, with a nice layout image gallery
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={battleshipImage} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Battleship Game</h2>
                        <a href="https://moosecapital.github.io/Battleship/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Battleship" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to GitHub'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        Play a classic game of battleship against the computer
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={weatherImage} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Weather App</h2>
                        <a href="https://moosecapital.github.io/Weather-App/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Weather-App" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to GitHub'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        Get your local weather with a nice scenic background
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={taxCalcImage} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax Calculator</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to GitHub'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>


            </main>
            <footer>
                <section className="contact-side">
                <div className="contact-row">
                    <Icon path={mdiPhoneOutline} size={1} />
                    <p>(505)-111-1111</p>
                </div>
                <div className="contact-row">
                    <Icon path={mdiEmailOutline} size={1} />
                    <p>MooseCapital@gmail.com</p>
                </div>

                </section>
                 <img src={mooseLandscape} alt="moose with mountain scenery"/>
            </footer>
            {/* <svg className={'wave-svg'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className={'.wave-path'} fill={props.item.screenMode === 'light-mode' ? 'wheat' : '#4c566a'} fillOpacity="1" d="M0,256L30,245.3C60,235,120,213,180,218.7C240,224,300,256,360,245.3C420,235,480,181,540,133.3C600,85,660,43,720,64C780,85,840,171,900,181.3C960,192,1020,128,1080,128C1140,128,1200,192,1260,224C1320,256,1380,256,1410,256L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg> */}
            {/* <svg className={'wave-svg'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={props.item.screenMode === 'light-mode' ? 'wheat' : '#4c566a'}  fill-opacity="1" d="M0,160L80,154.7C160,149,320,139,480,149.3C640,160,800,192,960,213.3C1120,235,1280,245,1360,250.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        </>
    )
}

export default Home
