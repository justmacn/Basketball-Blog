//Declare global variables from HTML
const formBtn = document.querySelector('#form-btn');

//TODO - on submit, console log form values
formBtn.addEventListener('click', function (event) {
    //prevent event from resetting
    event.preventDefault()
    console.log(event);
    //TODO - on submit, feedback for if() no values in form "error"


})



//TODO - on submit, redirect to blog.html