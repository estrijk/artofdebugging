const code = `st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past:$dropOut
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request
para=>parallel: parallel tasks

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->para
c2(true)->io->e
c2(false)->e

para(path1, bottom)->sub1(left)->op1
para(path2, right)->op2->e`;

var diagram = flowchart.parse(code);
diagram.drawSVG("diagram");

// you can also try to pass options:

diagram.drawSVG("diagram", {
  x: 0,
  y: 0,
  "line-width": 3,
  "line-length": 50,
  "text-margin": 10,
  "font-size": 14,
  "font-color": "black",
  "line-color": "black",
  "element-color": "black",
  fill: "white",
  "yes-text": "yes",
  "no-text": "no",
  "arrow-end": "block",
  scale: 1,
  // style symbol types
  symbols: {
    start: {
      "font-color": "red",
      "element-color": "green",
      fill: "yellow",
    },
    end: {
      class: "end-element",
    },
  },
  // even flowstate support ;-)
  flowstate: {
    past: { fill: "#CCCCCC", "font-size": 12 },
    current: {
      fill: "yellow",
      "font-color": "red",
      "font-weight": "bold",
    },
    future: { fill: "#FFFF99" },
    request: { fill: "blue" },

    invalid: { fill: "#444444" },
    approved: {
      fill: "#58C4A3",
      "font-size": 12,
      "yes-text": "APPROVED",
      "no-text": "n/a",
    },
    rejected: {
      fill: "#C45879",
      "font-size": 12,
      "yes-text": "n/a",
      "no-text": "REJECTED",
    },
  },
});


function dropOut(pointer, diagram) {
  console.log(diagram);
}
