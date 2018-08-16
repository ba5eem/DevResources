const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const PORT = 8080;
const createElementHTML = require("./createElementPage.js");
const createIndexHTML = require("./redoIndexPage.js");

let elements = {
  "/helium.html": true,
  "/hydrogen.html": true
};

const loadGetRequest = (response, path) => {
  fs.readFile(`./public${path}`, (err, data) => {
    if (err) {
      loadGetRequest(response, "/404.html");
    } else if (!`./public${path}`) {
      loadGetRequest(response, "/404.html");
    } else {
      response.end(data);
    }
  });
};

const server = http
  .createServer((request, response) => {
    let { headers, method, url } = request;
    request.on("error", err => {
      console.error(err);
      response.statusCode = 400;
      response.end();
    });
    response.on("error", err => {
      console.error(err);
    });
    console.log("request: ", url);
    console.log("method: ", method);
    // console.log("headers: ", headers);

    //direct root directory to index.html file
    url = url === "/" ? "/index.html" : url;

    switch (method) {
      case "GET":
        loadGetRequest(response, url);
        break;
      case "POST":
        request.setEncoding("utf8");
        request.on("data", chunk => {
          let data = querystring.parse(chunk);
          let newPage = createElementHTML(data);

          fs.writeFile(`./public/${data.name}.html`, newPage, err => {
            if (err) {
              console.log("Error creating new page.");
            } else {
              console.log("New page has been created");

              elements[`/${data.name}.html`] = true;
              fs.writeFile(
                "./public/index.html",
                createIndexHTML(elements),
                err => {
                  if (err) {
                    console.log("Error occured");
                  } else {
                    console.log("Updated index page");
                  }
                }
              );
            }
          });
        });
        response.end();
        break;
    }
  })
  .listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
