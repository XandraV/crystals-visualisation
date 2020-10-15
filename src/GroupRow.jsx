import React from "react";
import BubbleChart from "./BubbleChart";
import Crystal from "./Crystal";

const GroupRow = (props) => (
  <div key={props.title} style={{ textAlign: "center", paddingBottom:"3rem" }}>    
      <div
        style={{paddingRight:"5rem",
          fontSize: "1.2rem",
          fontWeight: 700,
          display: "inline-block",
          paddingBottom: "2rem",
        }}
      >
        {props.title}
      </div>
    <span style={{ textAlign: "center", display: "inline-block" }}>
      <div>
        {props.rowData.map((m) => (
          <span key={m.name}>
            <Crystal size={600} mineral={m} marginRight={"4rem"} />
          </span>
        ))}
      </div>
    </span>
    <span>
      <BubbleChart label={props.title} data={props.bubbleData} />
    </span>
  </div>
);

export default GroupRow;
