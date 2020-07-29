import React, { Component } from "react";
import Digital from "./Digital";
import Analogic from "./Analogo/Analogic";
import styled from "styled-components";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.getTime(), digital: true };
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

  setDigital(digital) {
    this.setState({ digital: digital });
  }
  render() {
    const { digital } = this.state;
    return (
      <div className="container">
        <div className="row">
          <Div
            className={`col-6 btn btn-${digital ? "success" : "secondary"}`}
            onClick={() => this.setDigital(true)}
          >
            Digital
          </Div>
          <Div
            className={`col-6 btn btn-${digital ? "secondary" : "primary"}`}
            onClick={() => this.setDigital(false)}
          >
            Analogic
          </Div>
          <div className="col-12">
            {digital ? (
              <Digital {...this.state} />
            ) : (
              <Analogic {...this.state} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const Div = styled.div`
  border-radius: 0 !important;
`;

export default Clock;
