import React from "react";
import styled from "styled-components";

function Digital({ hours, minutes, seconds, ampm }) {
  return (
    <Time>
      <h1>
        {hours}:{minutes}:{seconds}{" "}
      </h1>{" "}
      <h6>{ampm}</h6>
    </Time>
  );
}

const Time = styled.div`
  margin: calc(50vh - 98px) auto auto calc(50% - 200px);
  background-color: #218838;
  width: 400px;
  height: 100px;
  text-align: center;
  color: #fff;
  h1,
  h6 {
    line-height: 100px;
    display: inline-block;
  }
  height: 100px;
  border-radius: 20px;

  &:hover {
    opacity: 1;
  }
`;
export default Digital;
