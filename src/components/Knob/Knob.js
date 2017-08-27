import React, { Component } from 'react';
import './Knob.css';

class Knob extends Component {

  constructor(props){
    super(props);
    var knobAngle = this.convertToAngle(this.props.percent);
    this.state = {
      knobAngle: knobAngle,
      activeTicks: this.computeActiveTicks(knobAngle)
    };
  }

  componentWillReceiveProps(nextProps) {
    var knobAngle = this.convertToAngle(nextProps.percent);
    this.setState({
      knobAngle: this.convertToAngle(nextProps.percent),
      activeTicks: this.computeActiveTicks(knobAngle)
    });
  }
  
  convertToAngle(percent){
    return percent * 2.7;
  }

  computeActiveTicks(angle) {
    var activeTicks = (Math.round(angle / 10) + 1);
    return activeTicks;
  }

  render(){
    let ticks = [];
    const knobStyle = {
      transform: +this.state.knobAngle ? 'rotate('+this.state.knobAngle+'deg)' : 'rotate(0deg)'
    };

    for(let i = 0; i < this.state.activeTicks; i += 1) {
      ticks.push(<div className={`tick tick-${this.props.knobId} activetick`}></div>);
    }
    for(let i = 0, len=28-this.state.activeTicks; i < len; i += 1) {
      ticks.push(<div className={`tick tick-${this.props.knobId}`}></div>);
    }
    return (
      <div className="knob-parent">
        <div className="knob-surround">
          <div id={`knob${this.props.knobId}`} className="knob"
            style={knobStyle}></div>
          <span className="min">Min</span>
          <span className="max">Max</span>

          <div className="ticks">
            {ticks}
          </div>
        </div>
        <div className="label-name">{this.props.label}</div>

      </div>
    );
  }
}

export default Knob;
