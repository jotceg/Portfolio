import React from 'react';

export default () => (
    <section id='contact' className='section'>
        <div className='container'>
            <h1 className='title'>
                Contact me
            </h1>
            <h2 className='subtitle'>
                You can use the form below:<br />
            </h2>
            <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' className='container'>
                <div className='field'>
                    <label className='label'>
                        Email
                    </label>
                    <div className='control has-icons-left'>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-envelope'>
                            </i>
                        </span>
                        <input type='email' placeholder='E.g: you@awesome.com' className='input is-link' />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>
                        Message
                    </label>
                    <div className='control'>
                        <textarea type='text' className='textarea is-primary' placeholder='What can i help you with?'>
                        </textarea>
                    </div>
                </div>
                <div className='field'>
                    <div className='control'>
                        <button className='button is-success'>
                            Send
                        </button>
                    </div>
                </div>
                <h5 className='is-flex is-flex-row'>
                    <h5 className='has-text-info'>Note</h5>: i always try to answer within 48 hours, so stay tune :)
                </h5>
            </form>
        </div>
    </section>
);