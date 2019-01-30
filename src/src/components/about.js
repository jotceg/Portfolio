import React from 'react';
import avatar from '../images/512x512.png';

export default () => (
    <section id='about' className='section'>
        <div className='container'>
            <h1 className='title'>
                About me
            </h1>
            <h2 className='subtitle'>
                I'm Jakub Cywka.<br />I'm 14 and i'm a front end web developer with aspirations to become fullstack soon. I'm based in Poland.
            </h2>
            <div className='is-flex has-items-centered'>
                <figure className='image is-128x128'>
                    <img className='is-rounded' src={avatar} alt='This is my avatar' />
                </figure>
            </div>
        </div>
    </section>
)