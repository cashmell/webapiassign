var http = require('http');




var server = http.createServer(function (req, res) {

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (req.url == '/form' && req.method == "POST") {
        let data = '';
        var obj = {}

        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {


            obj = JSON.parse(data)
            var myHtml = `<h1> REGISTRATION DETAILS </h1>

        <div class="container">
            <div class="row">
                <div class="col-10">
                    <label for="fname">First Name: ${obj["fname"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="lname">Last Name: ${obj["lname"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="email">Email:  ${obj["email"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="mobile">Mobile: ${obj["mobile"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="gender" required>Gender: ${obj["gender"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="dob">Date Of Birth: ${obj["dob"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="address">Address: ${obj["address"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="city">City: ${obj["city"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="pincode">Area PIN: ${obj["pin"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="state">State: ${obj["state"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="specialization">Specialization: ${obj["specialization"]}</label>
                </div>
            </div>
            <div class="row">
                <div class="col-10">
                    <label for="password">Password:  ${obj["password"]}</label>
                </div>
            </div>
        </div>`

            res.end(myHtml);
        })


        // set response header
        res.on("error", (err) => console.log(err))

        // set response content    


    } else {
        res.writeHead(400, {
            "Content-Type": "text/html"
        })
        res.end('<p>Invalid Request!</p>');
    }

});


server.listen(8080, () => console.log('server at port 8080 is running..')); //3 - listen for any incoming requests