import React, { Component } from "react";
import Shadow from "./Shadow";
import Ticks from "./Ticks";
import Ponteiros from "./Ponteiros";
import Numbers from "./Numbers.";

class Analogic extends Component {
  render() {
    return (
      <div>
        <svg id="clock" viewBox="0 0 100 100" width="400" height="400">
          <Shadow />
          <circle id="face" cx="50" cy="50" r="45" />
          <Ticks />
          <Numbers />
          <Ponteiros {...this.props} />
        </svg>
      </div>
    );
  }
}

export default Analogic;
