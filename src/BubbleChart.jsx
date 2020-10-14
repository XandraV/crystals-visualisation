import React from "react";
import * as d3 from "d3";

const color = d3
  .scaleLinear()
  .domain([0,20, 50, 80, 100])
  .interpolate(d3.interpolateHcl)
  .range(["#3880FF", "#FF00BF", "#00EACE","#FFB71B", "#FFC619"]);
const radiusScale = d3.scaleSqrt().range([1, 50]).domain([0, 100]);
const width = 250;
const height = 250;

let mounted = false;

class BubbleChart extends React.Component {
  componentWillMount() {
    mounted = true;
  }

  componentDidMount() {
    d3.forceSimulation()
      .nodes(this.props.data)
      .velocityDecay(0.5)
      .force("x", d3.forceX().strength(0.05))
      .force("y", d3.forceY().strength(0.05))
      .force(
        "collide",
        d3.forceCollide((d) => {
          return radiusScale(d.occurence/2) + 11;
        })
      )
      .on("tick", () => {
        if (mounted) {
          this.setState({ ...this.props.data });
        }
      });
  }

  componentWillUnmount() {
    mounted = false;
  }

  render() {
    return (
      <svg width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {this.props.data.map((item, index) => (
            <g>
            <circle
              key={index}
              r={10+radiusScale(item.occurence/2)}
              cx={item.x}
              cy={item.y}
              fill={color(item.occurence)}
             
            />
            <text
              key={"value"}
              style={{
                fontSize: "0.7rem",
                textAnchor: "middle",
                transform: `translate(${item.x}px, ${item.y+5}px)`,
                fill: "white",
              }}
            >
              {item.elementNum}
            </text>
          </g>
          ))}
        </g>
      </svg>
    );
  }
}

export default BubbleChart;
