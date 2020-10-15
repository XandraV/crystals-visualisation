import React from "react";
import * as d3 from "d3";

export const color = d3
  .scaleLinear()
  .domain([0, 10, 70, 100])
  .interpolate(d3.interpolateHcl)
  .range(["#9558B2", "#61DAFB", "#ED1944", "#9999FF"]);

const radiusScale = d3.scaleSqrt().range([1, 50]).domain([0, 100]);
const width = 180;
const height = 150;

class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, hovered: null };
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
          return radiusScale(d.occurence / 10) + 11;
        })
      )
      .on("tick", () => {
        this.setState({ ...this.props.data });
      });
  }

  handleMouseOver = (index, item) => {
    this.setState({ hovered: item });
    d3.selectAll("circle").on("mouseover", function () {
      d3.select(this).transition().duration(1000).attr("r", 40);
    });
  };

  handleMouseLeave = (item, occurrence) => {
    this.setState({ hovered: null });
    d3.selectAll("circle").on("mouseleave", function (d, i) {
      d3.select(this)
        .transition()
        .duration(1000)
        .attr("r", 10 + radiusScale(occurrence / 10));
    });
  };

  svgMouseOver = () =>
    d3
      .forceSimulation()
      .nodes(this.props.data)
      .velocityDecay(0.5)
      .force("x", d3.forceX((d) => d.x / 2).strength(0.05))
      .force("y", d3.forceY((d) => d.y / 2).strength(0.05))
      .force(
        "collide",
        d3.forceManyBody((d) => {
          return radiusScale(d.occurence / 10) + 11;
        })
      )
      .on("tick", () => {
        this.setState({ ...this.props.data });
      });

  svgMouseLeave = () =>
    d3
      .forceSimulation()
      .nodes(this.props.data)
      .velocityDecay(0.5)
      .force("x", d3.forceX((d) => -2 * d.x).strength(0.05))
      .force("y", d3.forceY((d) => -2 * d.y).strength(0.05))
      .force(
        "collide",
        d3.forceCollide((d) => {
          return radiusScale(d.occurence / 10) + 11;
        })
      )
      .on("tick", () => {
        this.setState({ ...this.props.data });
      });

  render() {
    return (
      <svg
        width={width}
        height={height}
        style={{ verticalAlign: "middle", overflow: "visible" }}
        onMouseOver={() => this.svgMouseOver()}
        onMouseLeave={() => this.svgMouseLeave()}
      >
        <text
          style={{
            fontSize: "0.7rem",
            transform: `translate(${10}rem, ${-1}rem)`,
            fill: "grey",
          }}
        >
          {this.state.hovered != null
            ? `${this.state.hovered.occurence} minerals contain`
            : ``}
        </text>
        <text
          style={{
            fontSize: "0.7rem",
            transform: `translate(${10}rem, ${0}rem)`,
            fill: "grey",
          }}
        >
          {this.state.hovered != null
            ? `${this.state.hovered.elementNum} distinct elements`
            : ``}
        </text>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {this.state.data.map((item, index) => (
            <g key={`bubble-${index}`}>
              <circle
                r={10 + radiusScale(item.occurence / 10)}
                cx={item.x}
                cy={item.y}
                fill={color(item.occurence)}
                onMouseOver={() => this.handleMouseOver(index, item)}
                onMouseLeave={() => this.handleMouseLeave(item, item.occurence)}
              />
              <text
                key={"value"}
                style={{
                  fontSize: "0.7rem",
                  textAnchor: "middle",
                  transform: `translate(${item.x}px, ${item.y + 5}px)`,
                  fill: "white",
                }}
              >
                {/* {`${item.occurence} minerals contain ${item.elementNum} distinct elements`} */}
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
