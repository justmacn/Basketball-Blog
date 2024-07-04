//global variables from HTML declared
const formBtn = document.querySelector('#form-btn');
const username = document.querySelector('#username');
const title = document.querySelector('#title')
const blog = document.querySelector('#blog');
const errorMsg = document.querySelector('#form-msg');

//form values declared as an object
const blogPost = {
    username: username.value.trim(),
    title: title.value.trim(),
    content: blog.value.trim(),
}

//
formBtn.addEventListener('click', function (event) {
    //prevent submit from resetting
    event.preventDefault()
    
    //TODO - on submit, console log form values
    console.log(blogPost);
   
    
    // error msg displays if values are blank when you click submit
    if (username.value === '') {
      displayMessage('error', 'Please enter a username');
    } else if (title.value === '') {
        displayMessage('error', 'Please include a title');
    } else if (blog.value === '') {
        displayMessage('error', 'Blog Post cannot be blank');
    } else {
    // clicking submit will redirect to blog.html if values are validated
        location.href = "./blog.html"
    }
      

})


// this function displays the error msgs when called
function displayMessage(type, message) {
    errorMsg.textContent = message;
    errorMsg.setAttribute('class', type)
}