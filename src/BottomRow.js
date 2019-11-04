import React from "react";
import "./App.css";
import BottomRowComponents from './Components/BottomRowComponents';
const BottomRow = () => {
  return (
    <div className="bottomRow">
      <BottomRowComponents title="Down" value="3" />
      <BottomRowComponents title="To Go" value="7"/>
      <BottomRowComponents title="Ball on" value="21" />
      <BottomRowComponents title="Quarter" value="4" />
    </div>
  );
};

export default BottomRow;
