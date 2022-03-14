var submitButton = document.getElementById("btn-sub")

submitButton.addEventListener("click", function (event) {

    const formData = {
        fname: document.getElementById("fname"),
        lname: document.getElementById("lname"),
        email: document.getElementById("email"),
        mobile: document.getElementById("mobile"),
        gender: document.querySelector('input[name="gender"]:checked'),
        dob: document.getElementById("dob"),
        address: document.getElementById("address"),
        city: document.getElementById("city"),
        pin: document.getElementById("pin"),
        state: document.getElementById("state"),
        specialization: document.querySelector('.specialization[name="specialization[]"]:checked'),
        password: document.getElementById("password")

    }
    event.preventDefault(); //
    var req = new XMLHttpRequest();

    const reqData = {
        fname: formData.fname.value,
        lname: formData.lname.value,
        email: formData.email.value,
        mobile: formData.mobile.value,
        dob: formData.dob.value,
        address: formData.address.value,
        city: formData.city.value,
        pin: formData.pin.value,
        state: formData.state.value,
        password: formData.password.value,
        gender: formData.gender.value,
        specialization: formData.specialization.value
    };

    req.onload = function () {
        if (req.readyState === req.DONE) {
            var status = req.status;

            if (status === 200) {
                var respObj = null;


                respObj = req.responseText;
                console.log(respObj);

                handleResponse(respObj);


            }

        }

    };


    req.onerror = (err) => console.error(err)
    req.open("POST", "http://127.0.0.1:8080/form", true);

    var json = JSON.stringify(reqData)
    req.send(json);
})

function handleResponse(responseObject) {
    var body = document.querySelector("body")
    console.log(body)

    body.innerHTML = ""
    // var parser = new DOMParser()
    // var doc = parser.parseFromString(responseObject, "text/html")

    body.innerHTML = responseObject

}