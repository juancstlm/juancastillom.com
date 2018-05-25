import React from 'react'

const education = require('./data/education.json')

export default class Education extends React.Component {

  renderEducation(){
    return education.map((school)=><div className='education-block'>
      <div className='school-logo'><img src={school.logo}/></div>
      <div className='school-info'>
        <h3>{school.name}</h3>
        <span>{school.startDate} - {school.endDate}</span>
        <h4>{school.degree}</h4>
        <p>{school.description}</p>
      </div>

    </div>)
  }
  render() {
    return <section id='education' className='one-page-section'>
      <div className='container aboutMe'>
        <div>
          <h2 className='title heading'>Education</h2>
        </div>
        {this.renderEducation()}
      </div>
    </section>
  }
}
