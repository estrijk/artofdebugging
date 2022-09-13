var code = `
start=>start: Ik heb een probleem
end=>end: End|future:>http://www.google.com
op1=>condition: Heb je een foutmelding
op2=>operation: Ga naar de aangeven regel?
op3=>operation: Nee
op4=>operation: Typ foutje?
op5=>operation: Lees de code door. Logica fout?
op6=>operation: Kopieer de foutmelding en zoek het op
cond2=>condition: Hebben mensen hetzelfde probleem?
op7=>operation: Nee
op8=>operation: Kijk naar hun oplossing en probeer het

start(right)->op1
op1(yes)->op2->op4->op5->op6->cond2
op1(no)->op3->end
cond2(yes)->op8->end
cond2(no)->end

`;

const diagram = flowchart.parse(code);
let scale = 1;
let maxWidth = 120;

if(window.innerWidth < 650) {
  throw(Error);
} else if(window.innerWidth < 850) {
  scale = 0.6;
  maxWidth = 70;
} else if(window.innerWidth < 1000) {
  scale = 0.55;
  maxWidth = 100;
} else if(window.innerWidth < 1100) {
  scale = 0.7;
} else if(window.innerWidth < 1200) {
  scale = 0.9;
}

diagram.drawSVG("diagram", {
  x: 0,
  y: 0,
  "line-width": 3,
  "line-length": 16,
  "font-size": 20,
  "font-color": "black",
  "line-color": "black",
  "element-color": "black",
  fill: "white",
  "yes-text": "no",
  "no-text": "no",
  "arrow-end": "binnerWidthlock",
  scale: scale,
  "text-margin":20,
  "maxWidth": maxWidth,
  // style symbol types
  symbols: {
    start: {
      "font-color": "",
      "element-color": "",

    },
    end: {
      class: "end-element",
    },
    condition: {
        class: "end-element",
        "font-color": "red",
        

      },
  },
  // even flowstate support ;-)
  flowstate: {
    past: { fill: "#CCCCCC", "font-size": 12 },
    condition: { fill: "#CCCCCC", "font-size": 12 },
  },
});


function dropOut(pointer, diagram) {
  console.log(diagram);
}
