import React from 'react'
var projects = require('./data/projects.json')


export default class Projects extends React.Component {

  renderProjects(){
    return <div></div>
  }
  render() {
    return <section id='projects' className='one-page-section-dark'>
      <div className='container'>
        <div>
          <h2 className='title heading'>Projects</h2>
        </div>
        <div>
          {console.log(projects)}
        </div>
      </div>
    </section>
  }
}
