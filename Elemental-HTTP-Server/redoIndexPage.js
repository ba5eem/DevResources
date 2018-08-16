let createIndexHTML = obj => {
  return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <title>The Elements</title>
          <link rel="stylesheet" href="/css/styles.css">
      </head>
      
      <body>
          <h1>The Elements</h1>
          <h2>These are all the known elements.</h2>
          <h3>These are ${Object.keys(obj).length}</h3>
            ${elementsList(obj)}
          <br>
          <br>
          <form action="index.html" method="post">
              <input type="text" name="name" value="element">
              <br>
              <br>
              <input type="text" name="symbol" value="symbol">
              <br>
              <br>
              <input type="text" name="atomicNumber" value="atomic number">
              <br>
              <br>
              <input type="text" name="description" value="description">
              <br>
              <br>
              <input type="submit" value="submit">
          </form>
      </body>
      
      </html>`;
};

let elementsList = obj => {
  let keys = Object.keys(obj);
  let list = keys.reduce((accum, curr) => {
    let elem = curr.charAt(1).toUpperCase() + curr.split(".html")[0].slice(2);
    accum += `<li><a href="${curr}">${elem}</a></li>`;
    return accum;
  }, "<ol>");
  return list + `</ol>`;
};

module.exports = createIndexHTML;
