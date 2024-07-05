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

    // method generates an array for each blogs array item in template literal to include style formatting
    const blogLi = blogsPosted.map((blog, index) => {
        return `<li data-index="${index}">
                    <span id="blog-title">${blog.title}</span><br>
                    <span id="blog-content">${blog.content}</span><br>
                    <span id="blog-user">Posted by: ${blog.username}</span><br>
                </li>`;
    });
    
        // method will append the created li elements to the parent ul blogList
        blogLi.forEach((blogPost) => {
            const li = document.createElement('li');
            // allows the html code in the blogLi template literal to be read properly
            li.innerHTML = blogPost;
            blogList.appendChild(li);
        });
};


// calls the init function
init();