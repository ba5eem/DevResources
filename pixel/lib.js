const lib = (function(){
  let colorsArray = ['#515c66', '#515c66', '#515c66',"#ff6a00","#ffcc66","#f29718","#737d87","#314559","#55b4d4","#5ccfe6","#39bae6","#f29718","#ffd580","#ffb454","#399ee6","#73d0ff","#59c2ff","#86b300","#bae67e","#c2d94c","#4cbf99","#95e6cb","#95e6cb","#f07171","#f28779","#f07178","#fa6e32","#ffa759","#ff7733","#e6b673","#ffc44c","#e6b673","#abb0b6","#5c6773","#5c6773","#a37acc","#d4bfff","#ffee99","#ed9366","#f29e74","#f29668",'#FFFF99', '#00B3E6','#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D','#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A','#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC','#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC','#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399','#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680','#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933','#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3','#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF','#E6B3B3', '#6680B3'];

  let statusHeader = document.getElementsByClassName('btn btn-warning')[0];
  let amount = window.innerHeight*window.innerWidth;
  let pixelBoxes = new Array(Math.floor(amount/400)).fill('i');

  let color = '#515c66';
  let status = false;
  let eraserOn = false;
  let previousColor;

  function setColor(){
    color = this.style.backgroundColor;
  }

  function getColor(){
    return color;
  }

  function paintColor(){
    if(status){
      this.style.backgroundColor = getColor();
    }
  }

  function makeLive(event){
    if(event.key === "d"){ // DRAW
      statusHeader.innerHTML = status ? 'DRAW OFF' : 'DRAW ON';
      status = !status;
    }
    if(event.key === "e"){ // ERASE
      previousColor = color;
      eraserOn = !eraserOn;
      eraser.className = eraserOn ? 'btn btn-info' : "btn btn-info disabled";
      color = '#515c66';
    }
    if(event.key === "r"){ // SET TO PREVIOUS COLOR
      eraserOn = false;
      eraser.className = eraserOn ? 'btn btn-info' : "btn btn-info disabled";
      color = previousColor;
    }
  }

  function clearScreen(event){
    if(event.key === 'c'){
      status = !status;
      statusHeader.innerHTML = status ? 'DRAW ON' : 'DRAW OFF';
      clear.className = "btn btn-info";
      arr.map(e => {
        e.style.backgroundColor = "#515c66";
      })
    }

    setTimeout(() => {
      clear.className = "btn btn-info disabled";
    },200);
  };

  return {
    colors: colorsArray,
    pixelBoxes: pixelBoxes,
    getColor: getColor,
    setColor: setColor,
    paintColor: paintColor,
    makeLive: makeLive,
    clearScreen: clearScreen
  }

})();