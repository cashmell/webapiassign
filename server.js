var http = require('http');




var server = http.createServer(function (req, res) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
    };

    if (req.url == '/form' && req.method == "POST") {
        let data = '';
        var obj = {}
        var myhtml = ''
        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {
           
            obj = JSON.parse(data);
            console.log(obj)
            // myhtml += `<img src="${obj["photoUrl"]}" alt="">
            // <p>${obj["fullname"]}</p><br><br>
            // <p> My Height is ${obj["height"]}</p><br><br>
            // <p>${obj["maritalStatus"]}</p>
            // <p>${obj["dob"]}</p>
            // <p>${obj["ghanaCardNo"]}</p>
            // `
            res.writeHead(200, {
                'Content-Type': 'application/json',
                ...headers
            });
            res.write(obj, headers);
            res.end();

        })


        // set response header


        // set response content    


    } else {

        // <div class="body2">

        // <p><h2>Credentials</h2><br><br></p>

        // <img src="a1.jpg" alt="">
        // <p>Lauren Adjei</p><br><br>
        // <p> My Height is 5'9</p><br><br>
        // <p> Single</p>
        // <p>4th Feb 2001</p>
        // <p>GH466464646</p>
        //     </div>
        res.writeHead(400, {
            "Content-type": "text/html"
        })

        res.end('<p>Invalid Request!</p>');

    }

});


server.listen(8080, () => console.log('Lauren web server at port 8080 is running..')); //3 - listen for any incoming requests