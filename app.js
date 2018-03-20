// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:

   if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            //response.write(response.statusCode.toString(contents));
            response.end(); // finished!
        });
    }

    else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/images/1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }

      else if(request.url === '/images/cat1.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat1.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
  


    else if(request.url === '/images/2.png'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/2.png', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/png'});
        response.write(contents);
        response.end();
    })
    }
  
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            //response.write(response.statusCode.toString(contents));
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/cars/new') {
        fs.readFile('./views/newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    // request didn't match anything:
    else {
        // fs.readFile('errorpage.html', 'utf8', function (errors, contents){
        //     response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
        //     response.write(contents);  //  send response body
        //     //response.write(response.statusCode.toString(contents));
        //     response.end(); // finished!
        // });
        response.writeHead(404);
        response.end('File not found!!!');
    }
});

// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");