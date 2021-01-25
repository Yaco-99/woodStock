import React from 'react';
import bar from '../images/bar.jpg'

const Shop = () =>{
    return <div className="about">
        <div className="about_right">
        <div className="about_right_text">
            <h2>SHOP</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam,
                atque, rem possimus earum ipsum magni voluptatem at laudantium quod
                recusandae illum facere aut excepturi molestiae quibusdam dolores
                a! Amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque aut corrupti perspiciatis sed. Quidem quasi esse pariatur
                  sed unde, quod expedita aliquam! Sequi recusandae
            </p>  
        </div>
        <a href="#" className="button">Go Shopping</a>
    </div>
        <div className="about_left">
        <img className="bar_img" src={bar} alt="chair"/>
    </div>
    </div>;
}

export default Shop;