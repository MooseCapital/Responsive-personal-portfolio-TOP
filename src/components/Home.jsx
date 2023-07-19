import {useContext, useEffect, useState, useRef} from 'react'
import Icon from '@mdi/react';
import {
    mdiEmailOutline,
    mdiGithub,
    mdiOpenInNew,
    mdiPhoneOutline,
    mdiWeatherNight,
    mdiWhiteBalanceSunny
} from '@mdi/js';

const moose = new URL('/public/images/48196495.png', import.meta.url).href;

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
                    <h3>About</h3>
                    <p>This are a few of my favorite personal projects, made with only vanilla javascript and more recently with React.</p>
                    <Icon className={"git-icon"} path={mdiGithub} size={1} />
                </section>

            </header>
            <main>


            </main>

        </>
    )
}

export default Home
