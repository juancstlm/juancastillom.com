import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/components/_skillcard.scss'

export default class SkillCard extends React.Component{
  render(){
    return <div className={this.props.type + ' grid-item skill-card'} data-category={this.props.type}>
      <img src={this.props.image} alt={this.props.name}/>
    </div>
  }
}

SkillCard.propTypes = {
  name: PropTypes.string.isRquired,
  type: PropTypes.string,
  image: PropTypes.string.isRquired,
}
