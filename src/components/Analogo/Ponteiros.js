import React, { Component } from "react";

class Ponteiros extends Component {
  render() {
    const { hours, minutes, seconds } = this.props;
    let secondangle = seconds * 6;
    let minangle = minutes * 6;
    let hourangle = hours * 30;

    return (
      <g id="hands" filter="url(#shadow)">
        <line
          id="hourhand"
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          transform={`rotate(${hourangle}, 50, 50)`}
        />
        <line
          id="minutehand"
          x1="50"
          y1="50"
          x2="50"
          y2="24"
          transform={`rotate(${minangle}, 50, 50)`}
        />
        <line
          id="secondhand"
          x1="50"
          y1="50"
          x2="50"
          y2="16"
          transform={`rotate(${secondangle}, 50, 50)`}
        />
      </g>
    );
  }
}

export default Ponteiros;
