//Declare global variables from HTML
const formBtn = document.querySelector('#form-btn');
const username = document.querySelector('#username').value;
const title = document.querySelector('#title').value;
const blog = document.querySelector('#blog');
const errorMsg = document.querySelector('#form-msg');


//TODO - on submit, console log form values
formBtn.addEventListener('click', function (event) {
    //prevent event from resetting
    event.preventDefault()
    console.log(event);
    console.log(event.target);
    //form values declared as object
    const blogPost = {
        name: username,
        title: title,
        content: blog,
    }
//TODO - on submit, feedback for if() no values in form "error"
    // validation
    if (username === '') {
      displayMessage('error', 'Username cannot be blank');
    } else if (title === '') {
        displayMessage('error', 'Title cannot be blank');
    } else if (blog === '') {
        displayMessage('error', 'Blog Post cannot be blank');
    } else {
        location.href = "../../blog.html"
    }
      
    //TODO - on submit, redirect to blog.html

})


//TODO - create function to display error message
function displayMessage(type, message) {
    errorMsg.textContent = message;
    errorMsg.setAttribute('class', type)
}