let createElementHTML = obj => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <title>The Elements - Helium</title>
       <link rel="stylesheet" href="/css/styles.css">
     </head>

     <body>
      <h1>${obj.name}</h1>
      <h2>${obj.symbol}</h2>
      <h3>Atomic number ${obj.atomicNumber}</h3>
      <p>${obj.name} is a chemical element with symbol ${
    obj.symbol
  } and atomic number ${obj.atomicNumber}. ${obj.description}</p>
      <p>
      <a href="/">back</a>
      </p>
     </body>

    </html>`;
};

module.exports = createElementHTML;
