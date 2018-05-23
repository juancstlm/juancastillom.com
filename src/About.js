import React from 'react'

export default class About extends React.Component {
  render() {
    return <section id='about' className='one-page-section'>
      <div className='container aboutMe'>
        <div>
          <h2 className='title heading'>About Me</h2>
        </div>

        <p>
          Currently I'm living in San Jose, CA, where I'm pursuing my bachelors degree
          in Software Engineering at San Jose State Univeristy. Appart from my studies
          I enjoy mountain biking. If you want to learn more about the projects  I
          am currently working on, check out them out below.
        </p>
      </div>
    </section>
  }
}
