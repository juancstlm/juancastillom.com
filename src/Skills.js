import React from 'react'
import SkillCard from './components/SkillCard'
import Isotope from 'isotope-layout'

var grid
var iso
var skills = require('./data/skills.json')
console.log(skills);

export default class Skills extends React.Component {

  componentDidMount() {
    grid = document.querySelector('.grid');
    iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 200
      }
    })
    iso.arrange({
  filter: '.Platform',
})
    console.log(iso);
  }

  skillFilter=(data)=>{
    console.log(data.target.value);
    if(data.target.value === '*'){
      iso.arrange({
            filter: data.target.value,
        })
    } else{
      iso.arrange({
            filter: '.'+data.target.value,
        })
    }
  }

  renderFilterBar(){
    var filters = ['Platform','Language','Tool' ]
    return <div className='filter-bar' id="filters">
      <button data-filter='*' value='*' onClick={this.skillFilter}>All</button>
      {filters.map((filter)=><button value={filter} onClick={this.skillFilter}
         data-filter={filter}>{filter}</button>)}
    </div>
  }

  renderSkills(){
    return skills.skills.map((skill)=>
    <div className={skill.type + ' grid-item'} data-category={skill.type}>
      <img src={skill.image} alt={skill.name}/>
    </div>)
  }
  render() {
    return <section id='skills' className='one-page-section'>
      <div className='container'>
        <div>
          <h2 className='title heading'>Skills</h2>
        </div>
        {this.renderFilterBar()}
        <div className='grid'>
                  {this.renderSkills()}
        </div>
      </div>
    </section>
  }
}
