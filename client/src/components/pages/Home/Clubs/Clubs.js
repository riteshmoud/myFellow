import React from 'react'
import { Home } from '../../../common/Base/Home';
import './clubs.css'
import ProKarters from '../../../../assets/images/prokarters.jpg'
import Shutterbugs from '../../../../assets/images/shutterbugs.jpeg'

const clubs = [
    {
        title: "Pro-Karters",
        tagLine: "The Offical Go-Kart Manufacturing Club of MIT-WPU",
        about: "We are MIT-WPU's offical Go-Kart racing team. We are pleased to have achieved widespread acclaim for developing the first electric vehicle at MIT-WPU.",
        contact: "+91 9545074972",
        email: "teamprokarters@gmail.com",
        image: ProKarters
    },
    {
        title: "Shutterbugs",
        tagLine: "The Offical Media Club of MIT-WPU",
        about: "We are MIT-WPU's offical Go-Kart racing team. We are pleased to have achieved widespread acclaim for developing the first electric vehicle at MIT-WPU.",
        contact: "+91 7498777620",
        email: "shutterbugs@mitwpu.edu.in",
        image: Shutterbugs
    }
]

const clubsList = clubs.map((club) => {
    return (<div className='club-div'>
        <div className='img-div'>
            <img src={club.image} alt="pro-karters-img" />
        </div>
        <h2>{club.title}</h2>
        <h4>{club.tagLine}</h4>
        <p>{club.about}</p>
        <div className="contact-div">
            <div>
                {club.contact}
            </div>
            <div>
                {club.email}
            </div>
        </div>
    </div>)
})

export const Clubs = () => {

    return (
        <Home>
            <div className='main-club-div'>
                {clubsList}
            </div>
        </Home>
    );
}

