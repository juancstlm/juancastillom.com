import React from 'react'

export default class Contact extends React.Component {
  render() {
    return <section id='contact' className='one-page-section-dark'>
      <div className='container aboutMe'>
        <div>
          <h2 className='title heading'>Contact</h2>
        </div>
        <div>
          <form className='contact-form'>
            <p>
              <label>Name</label>
              <input type='text'
                name='name'
                id='name'
                aria-required='true'></input>
            </p>
            <p>
              <label>Email</label>
              <input type='email'
                name='email'
                id='email'
                aria-required='true'></input>
            </p>
            <div className='message'>
              <label>Message</label>
              <textarea name='message' id='message' aria-required='true'
                ></textarea>
            </div>
            <p>
              <button className='submit button'>Send</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  }
}
