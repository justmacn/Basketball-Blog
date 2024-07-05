// global variables pulled from blog HTML
const backBtn = document.querySelector('#back-btn');
const blogList = document.querySelector('#blogs-list');

let blogsPosted = [];


// redirects user back to previous webpage
backBtn.addEventListener('click', function (event) {
    location.href = "./index.html"
});


// initial function to run on page open
function init() {
    // this parses the stored blogs from the localStorage into an object
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    // if localStorage is not empty, this condition will update the blogs array
    if (storedBlogs !== null) {
      blogsPosted = storedBlogs;
    }

    // this calls the function to display the blogs
    displayBlogs();
    console.log(blogsPosted);
};


// function that converts the retrieved blogs array into li elements by index
function displayBlogs() {
    // this method will clear the ul element before appending our new ones
    blogList.innerHTML = '';

    // for loop creates li elements out of every array index
    for (let i = 0; i < blogsPosted.length; i++) {
        const blog = blogsPosted[i];
    
        const blogLi = document.createElement('li');
        blogLi.textContent = `${blog.title} \n${blog.content} \n${blog.username}`;
        blogLi.setAttribute('data-index', i);
    
        // method will append the created li elements to the parent ul blogList
        blogList.appendChild(blogLi);
      }
};



// calls the init function
init();