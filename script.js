
const form = document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All functions
//function to show error
function showError(input, message){ 
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//funtion showSuccess
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// function to check if email is valid
function isValidEmail(email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

//function to check if required feilds have data
function checkRequired(inputArray){
     inputArray.forEach(function(input){
      if (input.value === ''){
    showError(input, `${getFeildId(input)} is required`)
    } 
     else{
        showSuccess(input);
     }
  });
}

//function to check length of input feild
function checklength(input, min, max){
    if(input.value.length < min){
    showError(input, `${getFeildId(input)} needs to be atleast ${min} Characters`)
    } 
      else if  (input.value.length > max){
        showError(input, `${getFeildId(input)} needs to be less than ${max} Characters`)
    } 
    else{
        showSuccess(input);
    }
    }


//function to get the id of the feild with proper case
function getFeildId(input){
     return input.id.charAt(0).toUpperCase() + input.id.slice(1);            
}

// this is an event listener for the form on submit
form.addEventListener('submit',function(e){
    e.preventDefault();

   checkRequired([username,email,password,password2])
   checklength(username,3,10);
   checklength(password,6,30);
})

































































































/*
const form = document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All functions
//function to show error
function showError(input, message){ 
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//funtion showSuccess
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// function to check if email is valid
function isValidEmail(email){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}


// this is an event listener for the form on submit
form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value === ''){
       showError(username, 'username is required')
    }
    else{
        showSuccess(username);
    }

     //Check if email input is empty
     if(email.value === ''){
        showError(email, 'Email is required');
    }
    else if (!isValidEmail(email.value)) {
       showError(email, 'Email is invalid')
    }
    else{
        showSuccess(email);
    }

    //check if password input is empty
    if(password.value === ''){
        showError(password, 'Password is required');
    }
    else{
        showSuccess(password);
    }

    //check if password2 input is empty
    if(password2.value === ''){
        showError(password2, 'Password2 is required');
    }
        else{
        showSuccess(password2);
    }
}) 
*/



























































































/*
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('Password');
const password2 = document.getElementById('Password2');

// Function to update class and message for errors
function showError(input, message){
    // Get the parent element of the input feild (.form-control)
    const formControl = input.parentElement;
    // replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // replace the text for small element using the input message
    small.innerText = message;  
} 

function showSuccess(input){
    // Get the parent element of the input feild (.form-control)
    const formControl = input.parentElement;
    // replace the class - add success
    formControl.className = 'form-control success';
}


//Event listeners
//Create event listener for submit button
form.addEventListener('submit',function(e){
    // stop page reloading on submit
        e.preventDefault();
     //console.log(username.value); 
     
    // Check to see if feilds meet required feild 
    // check if username input is empty
    if(username.value === ''){
        showError(username, 'Username is required');
    }
    else{
        showSuccess(username);
    }

    //Check if email input is empty
    if(email.value === ''){
        showError(email, 'Email is required');
    }
    else{
        showSuccess(email);
    }

    //check if password input is empty
    if(Password.value === ''){
        showError(Password, 'Password is required');
    }
    else{
        showSuccess(Password);
    }

    //check if password2 input is empty
    if(Password2.value === ''){
        showError(Password2, 'Confirm Password is required');
    }
    else{
        showSuccess(Password2);
    }
})
*/