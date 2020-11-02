import React from "react";
import { minerals } from "./data";
import Crystal from "./Crystal";
import { arsenates, oxides, silicates, sulfates } from "./bubbleData";
import GroupRow from "./GroupRow";
import { color } from "./BubbleChart";
import Crystal3D from "./Crystal3D";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem" }}>crystal elements</h1>
      <div style={{ paddingBottom: "4rem" }}>
        <p>distribution of distinct elements in minerals</p>
        <p>reimagined as crystals</p>(
        <a href="https://github.com/XandraV" target="_blank">
          alexandra v
        </a>
        )
      </div>
      <div style={{ paddingBottom: "3rem" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Crystal
            key={`crystal-${i}`}
            size={800}
            mineral={{
              name: `${i}`,
              elements: new Array(i).fill(1),
              colour: color(i),
            }}
            marginRight={"1rem"}
          />
        ))}
        <p>number of elements</p>
      </div>
      <GroupRow
        title="Arsenates"
        rowData={minerals[0].Arsenates}
        bubbleData={arsenates}
      />
      <GroupRow
        title="Oxides"
        rowData={minerals[1].Oxides}
        bubbleData={oxides}
      />
      <GroupRow
        title="Silicates"
        rowData={minerals[2].Silicates}
        bubbleData={silicates}
      />
      <GroupRow
        title="Sulfates"
        rowData={minerals[3].Sulfates}
        bubbleData={sulfates}
      />
    </div>
  );
}

export default App;
