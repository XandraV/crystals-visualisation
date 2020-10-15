import React from "react";

const Crystal = (props) => {
  const { size, mineral } = props;
  const elements = mineral.elements;
  const elementsNum = elements.map((_, idx) => elements.length - idx - 1);

  return (
    <svg
      width={50}
      height={50}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        overflow: "visible",
        paddingLeft: "1rem",
        marginRight: props.marginRight || 0,
      }}
    >
      {/* <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop
            offset="0%"
            stopColor={`${props.mineral.colour}`}
          />
          <stop offset="100%" stopColor="#f9f6ef" />
        </radialGradient>
      </defs>
      <circle
        key={mineral.m}
        cx={`100`}
        cy={`300`}
        r={`600`}
        fill={`url(#grad1)`}
      /> */}
      {elementsNum.map((idx) => (
        <g
          key={`component${idx}`}
          transform={`translate(${Math.pow(-1, idx) * 30} ${
            -idx * 10
          }) rotate(${Math.pow(-1, idx) * idx * 15} 100 480)`}
        >
          {/* border lines */}
          <path
            d={
              "M 100 0 L 200 100 L 200 460 L 150 500 L 50 500 L0 460 L 0 100 z"
            }
            stroke="#e6e6e9"
            fill={mineral.colour}
            opacity={0.7}
            strokeWidth="0.2rem"
          />
          {/* connecting border with the rectangle */}
          <path
            d={"M 0 100 L 50 140"}
            stroke="#e6e6e9"
            fill={"transparent"}
            strokeWidth="0.2rem"
          />
          <path
            d={"M 150 140 L 200 100"}
            stroke="#e6e6e9"
            fill={"transparent"}
            strokeWidth="0.2rem"
          />
          {/* front rectangle */}
          <path
            d={"M 50 500 L 50 140 L 150 140 L 150 500"}
            stroke="#e6e6e9"
            fill={"transparent"}
            strokeWidth="0.2rem"
          />
          {/* extra two lines from the tip */}
          <path
            d={"M 100 0 L 50 140"}
            stroke="#e6e6e9"
            fill={"transparent"}
            strokeWidth="0.2rem"
          />
          <path
            d={"M 100 0 L 150 140"}
            stroke="#e6e6e9"
            fill={"transparent"}
            strokeWidth="0.2rem"
          />
        </g>
      ))}

      <g>
        <text
          key={"value"}
          style={{
            fontSize: "10rem",
            textAnchor: "middle",
            transform: "translate(5rem, 60rem)",
            fill: "grey",
          }}
        >
          {mineral.name}
        </text>
      </g>
    </svg>
  );
};

export default Crystal;
