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
    specialization: document.getElementsByClassName('specialization'),
    password: document.getElementById("password")

}
submitButton = document.getElementById("btn-sub")
submitButton.addEventListener("click", function (event) {
    event.preventDefault(); //
    var req = new XMLHttpRequest();

    const reqData = `{
        fname:${formData.fname.value},
        lname:${formData.lname.value},
        email:${formData.email.value},
        mobile:${formData.mobile.value},
        dob:${formData.dob.value},
        address:${formData.address.value},
        city:${formData.city.value},
        pin:${formData.pin.value},
        state:${formData.state.value},
        password:${formData.password.value},
        gender:${formData.gender.value},
        specialization:${formData.specialization.value}
    }`
    req.open("POST", "http://localhost:8080/form", true)
    console.log(reqData)
    req.setRequestHeader("Content-Type", "application/json")

    req.responseType = 'text/html';
    req.onload = function () {
        var status = req.status;


        if (status === 200) {
            var respObj = null


            respObj = req.responseText
            handleResponse(respObj)


        } else {
            console.log("An error occurred ")
        }
    };
    req.send(reqData);



    function handleResponse(responseObject) {
        console.log(responseObject)
        var body = document.getElementById("body")
        var parser = new DOMParser()
        var doc = parser.parseFromString(responseObject, "text/html")
        body.innerHTML = ""
        body.appendChild(doc)

    }
})