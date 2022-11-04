
// contact form validation

function subimtform(e) {
    let x = document.getElementById('name').value;

    console.log(x)


    let y = document.getElementById('email').value;

    let z = document.getElementById('subject').value;

    let w = document.getElementById('message').value;



    // email regex

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (x == '') {
        alert("Name must be filled out");
        return false;
    }


    if (y == "") {
        alert("email must be filled out");
        return false;
    }
    if (y.match(regexEmail)) {

    } else {
        alert("email must be of email type example abc@gmail.com");
    }



    if (z == "") {
        alert("subject must be filled out");
        return false;
    }

    if (w == "Enter your message") {
        alert("message must be filled out");
        return false;
    } else if (w == "") {
        alert("message must be filled out");
    } else {
        alert('message sent successfully')
    }



}