import React from "react";

function Shadow() {
  return (
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
        <feOffset in="blur" dx="1" dy="1" result="shadow" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode in="shadow" />
        </feMerge>
      </filter>
    </defs>
  );
}

export default Shadow;
