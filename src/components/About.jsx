import {useContext, useEffect, useState, useRef} from 'react'
import Icon from "@mdi/react";
import {
    mdiEmailOutline,
    mdiGithub,
    mdiOpenInNew,
    mdiPhoneOutline,
    mdiWeatherNight,
    mdiWhiteBalanceSunny
} from "@mdi/js";

function About(props) {



    return (
        <>
            <div>about page</div>
            <p>home page</p>
            <Icon path={mdiOpenInNew} size={'24px'} />
            <Icon path={mdiGithub} size={1} />
            <Icon path={mdiPhoneOutline} size={1} />
            <Icon path={mdiEmailOutline} size={1} />
            <Icon path={mdiWeatherNight} size={1} />
            <Icon path={mdiWhiteBalanceSunny} size={1} />
        </>
    )
}

export default About
