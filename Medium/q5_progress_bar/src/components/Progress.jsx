import React, { useState } from "react";

import ProgressBar from "./ProgressBar";

const Progress = () => {
  const [val, setVal] = useState(100);

  return (
    <div>
      <h1>Progess Bar</h1>
      <ProgressBar width={val} />
      <span className="input">
        Input Percentage :{" "}
        <input
          type="number"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
        />
      </span>
    </div>
  );
};

export default Progress;
