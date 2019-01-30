import React from 'react';

export default () => (
    <section id='portfolio' className='section'>
        <div className='container'>
            <h1 className='title'>
                Portfolio
            </h1>
            <h2 className='subtitle'>
                What can i do?
            </h2>
            <div className='columns'>
                <div className='column'>
                    <a className='button fullwidth fullheight is-primary is-outlined'>
                        View layer (HTML {'&'} CSS)
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-primary is-outlined'>
                        Scripting (JS {'&'} TS)
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-primary is-outlined'>
                        APIs
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-primary is-outlined'>
                        Angular
                    </a>
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <a className='button fullwidth fullheight is-info is-outlined'>
                        jQuery
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-info is-outlined'>
                        Preprocessors (SASS {'&'} SCSS {'&'} LESS etc)
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-info is-outlined'>
                        RWD
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-info is-outlined'>
                        Git
                    </a>
                </div>
            </div>
            <div className='columns'>
            <div className='column'>
                    <a className='button fullwidth fullheight is-success is-outlined'>
                        Wordpress
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-success is-outlined'>
                        Bootstrap {'&'} Bulma
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-success is-outlined'>
                        Vue
                    </a>
                </div>
                <div className='column'>
                    <a className='button fullwidth fullheight is-success is-outlined'>
                        React
                    </a>
                </div>
            </div>
        </div>
    </section>
);