import {useContext, useEffect, useState, useRef} from 'react'
import Icon from '@mdi/react';
import {
    mdiEmailOutline,
    mdiGithub, mdiLinkBoxVariant, mdiLinkVariant,
    mdiOpenInNew,
    mdiPhoneOutline,
    mdiWeatherNight,
    mdiWhiteBalanceSunny
} from '@mdi/js';

const moose = new URL('/public/images/48196495.png', import.meta.url).href;
const taxCalc = new URL('/public/images/tax-calculator-site.png', import.meta.url).href;

function Home(props) {



    return (
        <>
            <nav>
                <a href="">about</a>
                <a href="">projects</a>
                <a href="">contact</a>
                {props.item.screenMode === 'light-mode' ?
                    <Icon className={"icon"} path={mdiWeatherNight} size={'1.5rem'}
                onClick={() => props.item.setScreenMode('dark-mode')}
                 /> :
                <Icon className={"icon"} path={mdiWhiteBalanceSunny} size={'1.5rem'} color={'#ebcb8b'}
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
                <section className="project">
                    <img className={'project-img'} src={taxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to Github'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={taxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to Github'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={taxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to Github'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={taxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to Github'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={taxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to Github'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>
                <section className="project">
                    <img className={'project-img'} src={taxCalc} alt=""/>
                    <div className="project-top">
                        <h2 className="project-title">Capital Gains Tax</h2>
                        <a href="https://moosecapital.github.io/Capital-gains-tax-calculator/" className="link-icon-p-1">
                            <Icon  className={"project-icon"} path={mdiLinkVariant} size={1} title={'link to website'} />
                        </a>
                        <a href="https://github.com/MooseCapital/Capital-gains-tax-calculator" className="link-icon-p">
                            <Icon  className={"project-icon-2"} path={mdiGithub} size={1} title={'link to Github'}/>
                        </a>
                    </div>
                    <p className="project-description">
                        For calculating all short and long capital gains, with local storage
                    </p>
                </section>


            </main>

        </>
    )
}

export default Home
