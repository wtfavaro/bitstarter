var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var k = fs.readFileSync('index.html', 'utf8');
        response.send(k);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
