// global variables pulled from blog HTML
const backBtn = document.querySelector('#back-btn');
const blogList = document.querySelector('#blogs-list');

let blogsPosted = [];

// redirects user back to previous webpage
backBtn.addEventListener('click', function (event) {
    location.href = "./index.html"
})

//TODO - retrieve blogs from localStorage

// initial function to run on page open
function init() {
    // this parses the stored blogs from the localStorage into an object
    const storedBlogs = JSON.parse(localStorage.getItem('blogs'));

    // if localStorage is not empty, this condition will update the blogs array
    if (storedBlogs !== null) {
      blogsPosted = storedBlogs;
    }

    // this calls the function to display the blogs
    // displayBlogs();
    // console.log(blogsPosted);
}

//TODO - render retrieved blogs on page

    // create li elements in a for loop
    // display created li(s)


// calls the init function
init();