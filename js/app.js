

const explanationElement = document.getElementById("explanation");
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
  "line-width": 2,
  "line-length": 16,
  "font-size": 20,
  "font-color": "white",
  "line-color": "black",
  "element-color": "black",
  "fill": "grey",
  "yes-text": "no",
  "no-text": "no",
  "text-margin":20,
  "maxWidth": maxWidth,
  "scale": scale,

  },
);

 function dropOut(pointer, diagram) {
  fetch(data[diagram.key])
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.querySelector('#explanation').innerHTML = body;
  });
}
