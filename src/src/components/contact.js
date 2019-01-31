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
            <form name='contact' className='field' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' className='container'>
                <label className='label'>
                    Email
                </label>
                <div className='control has-icons-left'>
                    <span className='icon is-small is-left'>
                        <i className='fas fa-envelope'>
                        </i>
                    </span>
                    <input name='email' type='email' placeholder='E.g: you@awesome.com' className='input is-link' />
                </div>
                <label className='label'>
                    Message
                </label>
                <div className='control'>
                    <textarea name='message' type='text' className='textarea is-primary' placeholder='What can i help you with?'>
                    </textarea>
                </div>
                <div className='control has-margin-top-4'>
                    <button type='submit' className='button is-success'>
                        Send
                    </button>
                </div>
                <h5 className='is-flex is-flex-row'>
                    <h5 className='has-text-info'>Note</h5>: i always try to answer within 48 hours, so stay tune :)
                </h5>
            </form>
        </div>
    </section>
);