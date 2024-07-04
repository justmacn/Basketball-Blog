//global variables from HTML declared
const formBtn = document.querySelector('#form-btn');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title')
const blogInput = document.querySelector('#blog');
const errorMsg = document.querySelector('#form-msg');

//form values to be stored in an array
const blogs = [];


// an event function that runs when the form is submitted
formBtn.addEventListener('click', function (event) {
    //prevents form from resetting
    event.preventDefault()
    
    // stores form values as object
    const blogContent = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: blogInput.value.trim(),
    };

    // declares the object as a string
    const blogPost = JSON.stringify(blogContent);
    
    
    // error msg displays if values are blank when you click submit
    if (username.value === '') {
        displayMessage('error', 'Please enter a username');
    } else if (title.value === '') {
        displayMessage('error', 'Please include a title');
    } else if (blog.value === '') {
        displayMessage('error', 'Blog Post cannot be blank');
    } else {
        // clicking submit will redirect to blog.html if values are validated
        // location.href = "./blog.html"

        // push blogPost values to blogs array 
        blogs.push(blogPost);

        // logs blogInput and stores updated blogs in local storage
        storedBlogs();
        console.log(blogContent);
        console.log(blogs);
    }
});


// this function stores the blogs array to the local storage for later retrival
function storedBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogs));
}

// this function displays the error msgs when called
function displayMessage(type, message) {
    errorMsg.textContent = message;
    errorMsg.setAttribute('class', type)
}
