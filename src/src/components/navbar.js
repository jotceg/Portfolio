import React from 'react';
import avatar from '../images/144x144.png';

export default () => (
    <div className='hero fullwidth has-background-primary is-bold'>
        <nav className='navbar fullwidth is-fixed-top is-primary' role='navigation' aria-label='Main site navigation'>
            <div className='navbar-brand'>
                <a href='https://github.com/jakub-cywka' className='navbar-item'>
                    <img src={avatar} />
                </a>
                <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='menu'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='menu' className='navbar-menu'>
                <div className='navbar-start'>
                    <a href='#about' className='navbar-item has-text-black'>
                        About me
                    </a>
                    <a href='#portfolio' className='navbar-item has-text-black'>
                        Portfolio
                    </a>
                    <div className='navbar-item has-dropdown is-hoverable has-text-black'>
                        <a className='navbar-link has-text-black'>
                            Other
                        </a>
                        <div className='navbar-dropdown'>
                            <a href='#podcast' className='navbar-item has-text-black'>
                                Podcast
                            </a>
                            <a href='#blog' className='navbar-item has-text-black'>
                                Blog
                            </a>
                            <hr className='navbar-divider'></hr>
                            <a href='#projects' className='navbar-item has-text-black'>
                                ...and other stuff
                            </a>
                        </div>
                    </div>
                </div>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <a href='#contact' type='button' className='button is-info'>
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);