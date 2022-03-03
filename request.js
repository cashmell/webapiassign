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
        specialiazation:${formData.specialization.value}
    }`
    req.open("POST", "http://localhost:8080/form", true)
    console.log(reqData)
    req.setRequestHeader("Content-Type", "application/json")

    req.responseType = 'application/json';
    req.onload = function () {
        var status = req.status;


        if (status === 200) {
            let respObj = null
            try {

                respObj = req.responseText
                handleResponse(respObj)
            } catch (err) {
                console.log("Could not parse json")
            }

        } else {
            console.log("An error occurred ")
        }
    };
    req.send(reqData);



    function handleResponse(responseObject) {
        console.log(responseObject)
        var diplayhtml = document.getElementsByClassName("body2")
        document.body.appendChild(responseObject, diplayhtml)
    }
})