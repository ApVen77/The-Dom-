// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate country
    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", " ");
        countryErr = false;
    }

    // Validate gender
    if (gender == " ") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", " ");
        genderErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};

//create a function called for madlibs
function libIts() {
    //target the values in the HTMl

    var storyDiv = document.getElementById('story');
    var person = document.getElementById('person').value;
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;
    storyDiv.innerHTML = person + "is locked down" + adjective + " " + noun + " Wow this is great!";
}

// var libButton= document.getElementById('lib-button'); 
// libButton.addEventListener('click', libIts); 

// //Add a empty div so when you click on it, the date displays...
// function dateToday() {
//     document.getElementsByClassName('time').innerHTML= Date(); 
// }

// function style() 
// {
// //font styles added by JS:
//  text.style.fontSize = "14pt";
//  text.style.fontFamily = "Comic Sans MS";
//  text.style.color = "green";
// }

// function style2() {
//     text.style.color= "red";
// }

// function style3() {
//     text.style.color= "blue";
//     text.style.opacity= '1'
// }

// function style4() {
//     text.style.color= "yellow";
// }

// function style5() {
//     text.style.color= "pink";
//     text.style.fontSize= '50px';
// }

function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function mOver1(obj) {
    obj.innerHTML = "Albany"
}

function mOut1(obj) {
    obj.innerHTML = "What is the capital of NY?"
}

function changeColor() {
    document.querySelector("button").style.backgroundColor = "pink"; //change background color
    document.querySelector("button").style.color = "black "; //change font color
    document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
  }

var btn = document.querySelector("button");
function changeColor() {
    btn.style.backgroundColor = "pink"; //change background color
    btn.style.color = "black"; //change font color
    document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
}
btn.onclick = changeColor; //event handler

var btn = document.querySelector("button");
function changeColor() {
    btn.style.backgroundColor = "pink"; //change background color
    btn.style.color = "black"; //change font color
    document.querySelector("p").innerHTML = "Look! The button changed color." //add text
}
btn.addEventListener("click", changeColor); //adds event listener

var btn = document.querySelector("button");
function changeColor(anyParameter){ //function declaration
  btn.style.backgroundColor = "pink"; //change background color
  btn.style.color = "black"; //change font color
  document.querySelector("p").innerHTML = "Great! The button changed its color." //add text
}
btn.addEventListener("click", function(){
  changeColor(1); //function with a parameter
}, false); //adds event listener with anonymous function

// document.getElementById("demo").onmouseover = function() {mouseOver()};
// document.getElementById("demo").onmouseout = function() {mouseOut()};

// function mouseOver() {
//   document.getElementById("demo").style.color = "red";
// }

// function mouseOut() {
//   document.getElementById("demo").style.color = "black";
// }