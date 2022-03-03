var http = require('http');




var server = http.createServer(function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };

    if (req.url == '/form' && req.method == "POST") {
        let data = '';
        var obj = {}

        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {


            res.writeHead(200, headers);
            res.write(data);
            // res.end();

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