import React from 'react'

export default class Column extends React.Component{
  render(){
    return(
      <section className='column'>
        <div className='info'>
          <img src='http://www.iambailon.com/images/restart-icon.png'/>
          <h2>Smart Inventory</h2>
          <p>It’s new marketplace to buy/sell your videogames. We’re designing the whole product as open source. Stay tuned to join to the beta!</p>
          <div className='divider'></div>
          <ul>
            <li>
              <strong>Role:</strong> Product Designer
            </li>
            <li>
              <strong>Team:</strong> 4 Devs and me
            </li>
            <li><strong>Date:</strong> Jan. 2018</li>
          </ul>
          <button className='submit button'>Launch website →</button>
        </div>
        <div className='images'>
          
        </div>
      </section>
    );
  }
}