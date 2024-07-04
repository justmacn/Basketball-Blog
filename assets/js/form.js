//global variables from HTML declared
const formBtn = document.querySelector('#form-btn');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title')
const blogInput = document.querySelector('#blog');
const errorMsg = document.querySelector('#form-msg');

// this variable initializes an array to store the blog values
const blogsStored = JSON.parse(localStorage.getItem('blogs')) || [];


// an event function that runs when the blog is submitted
formBtn.addEventListener('click', function (event) {
    //prevents blog from resetting
    event.preventDefault()
    
    // stores blog values as object
    const blogContent = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: blogInput.value.trim(),
    };

    // declares the object as a string & logs to console
    // const blogPost = JSON.stringify(blogContent);
    // console.log(blogContent);
    
    // if else function call to display error msgs if values are blank when you click submit
    if (username.value === '') {
        displayError('error', 'Please enter a username');
    } else if (title.value === '') {
        displayError('error', 'Please include a title');
    } else if (blog.value === '') {
        displayError('error', 'Blog Post cannot be blank');
    } else {
        // clicking submit will redirect to blog.html if values are validated
        // location.href = "./blog.html"

        // push blogContent values to blogsStored array 
        blogsStored.push(blogContent);

        // function call to update blogsStored array in local storage and log to the console
        storeBlogs();
        console.log(blogsStored);
    }
});


// this function stores the blogsStored array to the local storage for later retrival
function storeBlogs() {
    localStorage.setItem('blogs', JSON.stringify(blogsStored));
}

// this function displays the error msgs when called
function displayError(type, message) {
    errorMsg.textContent = message;
    errorMsg.setAttribute('class', type)
}
