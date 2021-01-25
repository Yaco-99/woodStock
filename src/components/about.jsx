import React from 'react';
import chair from '../images/chair.jpg'

const About = () =>{
    return <div className="about">
        <div className="about_left">
        <img className="chair_img" src={chair} alt="chair"/>
    </div>
    <div className="about_right">
        <div className="about_right_text">
            <h2>ABOUT US</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam,
                atque, rem possimus earum ipsum magni voluptatem at laudantium quod
                recusandae illum facere aut excepturi molestiae quibusdam dolores
                a! Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque aut corrupti perspiciatis sed. Quidem quasi esse pariatur
                  sed unde, quod expedita aliquam! Sequi recusandae
            </p>  
        </div>
        <a href="#" className="button">LEARN MORE</a>
    </div>
    </div>;
}

export default About;