import React from 'react'

export default class WordScroller extends React.Component{

  constructor(props){
      super(props);

      this.state = {activeElement: 0};
    }

  componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
    clearInterval(this.interval);
  }
  getInitialState() {
    return {secondsElapsed: 0};
  }
  tick=()=> {
    if(this.state.activeElement === this.props.words.length-1)
    {
      this.setState({activeElement: 0});
    } else {
      this.setState({activeElement: this.state.activeElement + 1});
    }

  }
  renderWords=()=>{
    return <b>{this.props.words[this.state.activeElement]}</b>
  }
  render(){
    return <h4>
      {this.renderWords()}
    </h4>
  }
}
