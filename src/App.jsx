import React from "react";
import BubbleChart from "./BubbleChart";
import Crystal from "./Crystal";
import { minerals } from "./data";
import {
  arsenates,
  carbonates,
  oxides,
  silicates,
  sulfates,
} from "./bubbleData";

function App() {
  return (
    <div className="App">
      <span style={{ textAlign: "center", display: "inline-block" }}>
        <div>Arsenates</div>
        <div>
          <BubbleChart data={arsenates} />
        </div>
      </span>
      <span style={{ textAlign: "center", display: "inline-block", fontWeight: 700 }}>
        <div>Carbonates</div>
        <div>
          <BubbleChart data={carbonates} />
        </div>
      </span>
      <span style={{ textAlign: "center", display: "inline-block", fontWeight: 700 }}>
        <div>Oxides</div>
        <div>
          <BubbleChart data={oxides} />
        </div>
      </span>
      <span style={{ textAlign: "center", display: "inline-block", fontWeight: 700 }}>
        <div>Silicates</div>
        <div>
          <BubbleChart data={silicates} />
        </div>
      </span>
      <span style={{ textAlign: "center", display: "inline-block", fontWeight: 700 }}>
        <div>Sulfates</div>
        <div>
          <BubbleChart data={sulfates} />
        </div>
      </span>
      <div style={{ textAlign: "center" }}>
        {minerals.map((group) => (
          <div key={Object.keys(group)[0]}>
            <div
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "inline-block",
                paddingTop: "2rem",
              }}
            >
              {Object.keys(group)[0]}
            </div>
            <div>
              {Object.values(group)[0].map((m) => (
                <span key={m.name}>
                  <Crystal size={1200} mineral={m} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
