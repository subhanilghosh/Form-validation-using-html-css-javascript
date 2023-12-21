const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpass = document.getElementById("check-password");

form.addEventListener("submit",function(e){
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpassValue = confirmpass.value.trim();

    if(usernameValue === ""){
        setErrorFor(username,"This field cannot be empty!");
    }else{
        setSuccessFor(username);
    }

    if(emailValue === ""){
        setErrorFor(email,"This field cannot be empty!");
    }else if(!isEmail(emailValue)){
        setErrorFor(email,"Enter a valid email!");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue === ""){
        setErrorFor(password,"This field cannot be empty!");
    }else{
        setSuccessFor(password)
    }

    if(confirmpassValue === ""){
        setErrorFor(confirmpass,"This field cannot be empty");
    }else if(passwordValue !== confirmpassValue){
        setErrorFor(confirmpass,"Password does not match!")
    }else{
        setSuccessFor(confirmpass);
    }
}

function setErrorFor(input,message){
    const validationForm = input.parentElement;
    const small = validationForm.querySelector(".error");
    validationForm.className = "validation-form fail";
    small.innerText = message;
}

function setSuccessFor(input){
    const validationForm = input.parentElement;
    validationForm.className = "validation-form success";
}

function isEmail(email){
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}