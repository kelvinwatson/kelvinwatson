import React, { Component } from 'react';
import './Knob.css';

class Knob extends Component {

  constructor(props){
    super(props);
    this.state = {
      knobAngle: 0
    }
  }

  componentDidMount(){
    this.setAngle(this.convertToAngle(this.props.percent));
  }

  convertToAngle(percent){
    return percent * 2.7;
  }

  setAngle(angle){
    // var knob = document.getElementById('knob'+this.props.knobId)
    // knob.style.rotate = angle + 'deg';

    this.setState({
      knobAngle: angle
    });

    // highlight ticks
    var activeTicks = (Math.round(angle / 10) + 1);

    var ticksHtmlCollection = document.getElementsByClassName('tick-'+this.props.knobId);
    for (var i = 0; i<ticksHtmlCollection.length; i++){
      var tick = ticksHtmlCollection[i];
      tick.classList.remove('activetick');
    }

    var arrTicks = Array.from(ticksHtmlCollection);

    var sliced = arrTicks.slice(0,activeTicks);
    for (var j = 0; j<sliced.length; j++){
      sliced[j].classList.add('activetick');
    }
  }

  render(){

    const knobStyle = {
      transform: +this.state.knobAngle ? 'rotate('+this.state.knobAngle+'deg)' : 'rotate(0deg)'
    };

    console.log('knobStyle',knobStyle);

    return (
      <div className="knob-parent">
        <div className="knob-surround">
          <div id={`knob${this.props.knobId}`} className="knob"
            style={knobStyle}></div>
          <span className="min">Min</span>
          <span className="max">Max</span>

          <div className="ticks">
            <div className={`tick tick-${this.props.knobId} activetick`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
            <div className={`tick tick-${this.props.knobId}`}></div>
          </div>
        </div>
        <div className="label-name">{this.props.label}</div>

      </div>
    );
  }
}

export default Knob;
