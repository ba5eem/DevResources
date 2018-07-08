function makeRequest(query,cb){
  var rootRequest = new XMLHttpRequest();
  rootRequest.addEventListener("load",cb);
  rootRequest.open("GET",`https://www.reddit.com/r/${query}/.json`);
  rootRequest.send();
}

function requestListener(){
  let data = JSON.parse(this.responseText).data.children;
  //console.log(rootApi[0].data.preview.images[0].source);
  data.map(e => {
    images = document.createElement('img');
    images.innerHTML = 'ola'
    images.className = 'img-rounded';
    if(e.data.preview !== undefined){
      images.src = e.data.preview.images[0].source.url;
    }
    else{
      images.src = "http://via.placeholder.com/150x150";
    }
    images.href = e.data.permalink;
    container.appendChild(images);
    images.addEventListener('click', function(){
      window.open(`https://www.reddit.com${this.href}`)
    });
  });
};

// OPEN PAGE:
random.addEventListener('click', function(){
  makeRequest('surfing', requestListener);
});
myBoard.addEventListener('click', function(){
  makeRequest('hawaii', requestListener);
});




