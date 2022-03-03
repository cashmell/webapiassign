var http = require('http');




var server = http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url == '/form' && req.method == "POST") {
        let data = '';
        var obj = {}

        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {
            res.end(data);
        })


        // set response header


        // set response content    


    } else {
        res.writeHead(400, {
            "Content-type": "text/html"
        })
        res.end('<p>Invalid Request!</p>');
    }

});


server.listen(8080, () => console.log('server at port 8080 is running..')); //3 - listen for any incoming requests