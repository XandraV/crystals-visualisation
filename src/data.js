export const minerals = [
  {
    Arsenates: [
      {
        name: "Erythrite",
        elements: ["Co", "As", "O", "H"],
        elementsWeb:
          "<span>Co<sub>3</sub>(AsO<sub>4</sub>)<sub>2</sub> · 8H<sub>2</sub>O</span>",
        colour: "#ED2B88",
        hardness: "2",
        specificGravity: "3.06",
        shaderName: "pink",
      },
      {
        name: "Mimetite-M",
        elements: ["Pb", "As", "O", "Cl"],
        elementsWeb:
          "<span>Pb<sub>5</sub>(AsO<sub>4</sub>)<sub>3</sub>Cl</span>",
        colour: "#FFC619",
        hardness: "4",
        specificGravity: "7.36",
        shaderName: "yellow",
      },
      {
        name: "Cobaltkoritnigite",
        elements: ["Co,", "Zn", "H", "As", "O"],
        elementsWeb: "<span>(Co,Zn)(HAsO<sub>4</sub>) · H<sub>2</sub>O</span>",
        colour: "#C472FF",
        hardness: "2",
        mindatLink: "https://www.mindat.org/min-1091.html",
        specificGravity: "3.44",
        shaderName: "purple",
      },
      {
        name: "Clinoclase",
        elements: ["Cu", "As", "O", "H"],
        elementsWeb:
          "<span>Cu<sub>3</sub>(AsO<sub>4</sub>)(OH)<sub>3</sub></span>",
        colour: "#4A7EFF",
        hardness: "2.5",
        specificGravity: "4.38",
        shaderName: "blue",
      },
      {
        name: "Hematolite",
        elements: ["Mn,", "Mg,", "Al,", "Fe", "As", "O", "H"],
        elementsWeb:
          "<span>(Mn,Mg,Al,Fe<sup>3+</sup>)<sub>15</sub>(As<sup>5+</sup>O<sub>4</sub>)<sub>2</sub>(As<sup>3+</sup>O<sub>3</sub>)(OH)<sub>23</sub></span>",
        colour: "#E37400",
        hardness: "3½",
        mindatLink: "https://www.mindat.org/min-1857.html",
        specificGravity: "3.49",
        shaderName: "brown",
      },
    ],
  },
  {
    Oxides: [
      {
        name: "Chrysoberyl",
        elements: ["Be", "Al", "O"],
        elementsWeb: "<span>BeAl<sub>2</sub>O<sub>4</sub></span>",
        colour: "#FFC619",
        hardness: "8.5",
        specificGravity: "3.75",
        shaderName: "yellow",
      },
      {
        name: "Spinel",
        elements: ["Mg", "Al", "O"],
        elementsWeb: "<span>MgAl<sub>2</sub>O<sub>4</sub></span>",
        colour: "#F5010C",
        hardness: "7.5",
        specificGravity: "4",
        shaderName: "red",
      },
      {
        name: "Magnetite",
        elements: ["Fe", "O"],
        elementsWeb:
          "<span>Fe<sup>2+</sup>Fe<sup>3+</sup><sub>2</sub>O<sub>4</sub></span>",
        colour: "grey",
        hardness: "6",
        specificGravity: "5.175",
        shaderName: "grey",
      },
      {
        name: "Nealite",
        elements: ["Pb", "Fe", "As", "O", "Cl", "H"],
        elementsWeb:
          "<span>Pb<sub>4</sub>Fe<sup>2+</sup>(As<sup>3+</sup>O<sub>3</sub>)<sub>2</sub>Cl<sub>4</sub> · 2H<sub>2</sub>O</span>",
        colour: "#FF7700",
        hardness: "4",
        mindatLink: "https://www.mindat.org/min-2869.html",
        specificGravity: "5.89 (Calculated)",
        shaderName: "brown",
      },
      {
        name: "Corundum",
        elements: ["Al", "O"],
        elementsWeb: "<span>Al<sub>2</sub>O<sub>3</sub></span>",
        colour: "#ED2B88",
        hardness: "9",
        specificGravity: "3.9",
        shaderName: "pink",
      },
    ],
  },
  {
    Silicates: [
      {
        name: "Quartz",
        elements: ["Si", "O"],
        elementsWeb: "<span>SiO<sub>2</sub></span>",
        colour: "#00E1ED",
        hardness: "7",
        specificGravity: "2.65 - 2.66",
        shaderName: "lightblue",
      },
      {
        name: "Topaz",
        elements: ["Al", "Si", "O", "F,", "H"],
        elementsWeb:
          "<span>Al<sub>2</sub>(SiO<sub>4</sub>)(F,OH)<sub>2</sub></span>",
        colour: ["#FFAE1A"],
        hardness: "8",
        specificGravity: "3.5",
        shaderName: "yellow",
      },
      {
        name: "Zircon",
        elements: ["Zr", "Si", "O"],
        elementsWeb: "<span>Zr(SiO<sub>4</sub>)</span>",
        colour: "#F5010C",
        hardness: "7.5",
        specificGravity: "4.6",
        shaderName: "red",
      },
      {
        name: "Vesuvianite",
        elements: [
          "Ca,",
          "Na,",
          "Al,",
          "Mg,",
          "Fe",
          "B,",
          "Si",
          "O",
          "H,",
          "F,",
        ],
        elementsWeb:
          "<span>(Ca,Na,☐)<sub>19</sub>(Al,Mg,Fe<sup>3+</sup>)<sub>13</sub>(☐,B,Al,Fe<sup>3+</sup>)<sub>5</sub>(Si<sub>2</sub>O<sub>7</sub>)<sub>4</sub>(SiO<sub>4</sub>)<sub>10</sub>(OH,F,O)<sub>10</sub></span>",
        colour: "#FFC619",
        hardness: "6.5",
        specificGravity: "3.3",
        shaderName: "yellow",
      },
      {
        name: "Tanzanite",
        elements: ["Ca,", "Al,", "Si", "O", "H,"],
        elementsWeb:
          "<span>Ca<sub>2</sub>Al<sub>3</sub>[Si<sub>2</sub>O<sub>7</sub>][SiO<sub>4</sub>]O(OH)</span>",
        colour: "#4A7EFF",
        hardness: "6.5",
        specificGravity: "3.2",
        shaderName: "blue",
      },
    ],
  },
  {
    Sulfates: [
      {
        name: "Celestine",
        elements: ["Sr", "S", "O"],
        elementsWeb: "<span>SrSO<sub>4</sub></span>",
        colour: "#C472FF",
        hardness: "3 ",
        specificGravity: "3.96 - 3.98",
        shaderName: "purple",
      },
      {
        name: "Brochantite",
        elements: ["Cu", "S", "O", "H"],
        elementsWeb:
          "<span>Cu<sub>4</sub>(SO<sub>4</sub>)(OH)<sub>6</sub></span>",
        colour: "#55C500",
        hardness: "3½ - 4",
        specificGravity: "3.97",
        shaderName: "green",
      },
      {
        name: "Baryte",
        elements: ["Ba", "S", "O"],
        elementsWeb: "<span>BaSO<sub>4</sub></span>",
        colour: "#E37400",
        hardness: "3",
        specificGravity: "4.50",
        shaderName: "brown",
      },
      {
        name: "Chalcanthite",
        elements: ["Cu", "S", "O", "H"],
        elementsWeb: "<span>CuSO<sub>4</sub> · 5H<sub>2</sub>O</span>",
        colour: "#4A7EFF",
        hardness: "2",
        specificGravity: "2.286",
        shaderName: "blue",
      },
      {
        name: "Anglesite",
        elements: ["Pb", "S", "O"],
        elementsWeb: "<span>PbSO<sub>4</sub></span>",
        colour: "#8A9296",
        hardness: "3",
        specificGravity: "6.3",
        shaderName: "grey",
      },
    ],
  },
];
