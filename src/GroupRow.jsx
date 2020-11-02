import React from "react";
import BubbleChart from "./BubbleChart";
import Crystal from "./Crystal";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Crystal3D from "./Crystal3D";

const GroupRow = (props) => (
  <div key={props.title} style={{ textAlign: "center", paddingBottom: "3rem" }}>
    <div
      style={{
        paddingRight: "5rem",
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
          <OverlayTrigger
            trigger={["hover", "focus"]}
            placement="top"
            delay={200}
            overlay={
              <Popover
                id="popover-basic"
                style={{
                  borderBottomColor: `rgb(247 234 204 / 90%)`,
                  borderWidth: "3px",
                  borderColor: "rgb(247 234 204 / 90%)",
                  backgroundColor: `rgb(247 234 204 / 90%)`,
                  borderRadius: "0.2rem",
                  display: "flex",
                  maxWidth: "50rem",
                  fontFamily: "Libre Baskerville",
                }}
              >
                <span>
                  <span>
                    <Crystal3D
                      className="float-right"
                      width={200}
                      height={200}
                      shaderName={m.shaderName}
                    />
                    <span className="float-left p-4">
                      <strong
                        className="p-2"
                        style={{
                          borderRadius: "0.2rem",
                          padding: "0.2rem",
                          marginBottom: "0.5rem",
                          maxWidth: "6rem",
                          backgroundColor: `lightpink`,
                        }}
                      >
                        {m.name}
                      </strong>
                      <div className="p-2 pt-3">
                        <div>Main Group: {props.title}</div>
                        <div className="pt-1">Hardness: {m.hardness}</div>
                        <div className="pt-1 pb-1">
                          Specific Gravity: {m.specificGravity}
                        </div>
                        <span>Formula:</span>
                        <div
                          className="pl-2"
                          dangerouslySetInnerHTML={{
                            __html: m.elementsWeb,
                          }}
                        ></div>
                      </div>
                    </span>
                  </span>
                </span>
              </Popover>
            }
          >
            <span key={m.name}>
              <Crystal size={600} mineral={m} marginRight={"4rem"} />
            </span>
          </OverlayTrigger>
        ))}
      </div>
    </span>
    <span>
      <BubbleChart label={props.title} data={props.bubbleData} />
    </span>
  </div>
);

export default GroupRow;
