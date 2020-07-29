import React, { Component } from "react";
import styled from "styled-components";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  getTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    hours = hours === 0 ? 12 : hours <= 12 ? hours : hours - 12;
    return {
      hours: hours,
      minutes: ("00" + currentTime.getMinutes()).slice(-2),
      seconds: ("00" + currentTime.getSeconds()).slice(-2),
      ampm: currentTime.getHours() >= 12 ? "pm" : "am",
    };
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  setTimer() {
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }


  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { hours, minutes, seconds, ampm } = this.state;
    return (
      <Time className="btn btn-success">
        <h1>
          {hours}:{minutes}:{seconds}{" "}
        </h1>{" "}
        <h6>{ampm}</h6>
      </Time>
    );
  }
}

const Time = styled.div`
  margin: calc(50vh - 50px) auto auto calc(50vw - 200px);
  width: 400px;
  h1,
  h6 {
    line-height: 80px;
    display: inline-block;
  }
  height: 100px;
  border-radius: 20px;
`;
export default Clock;
