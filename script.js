var posts = [];

function createPost() {
    var title = document.getElementById("postTitle").value;
    var content = document.getElementById("postContent").value;
    
    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content for the post.");
        return;
    }

    var post = { title: title, content: content };
    posts.push(post);
    displayPosts();
}

function displayPosts() {
    var blogPosts = document.getElementById("blogPosts");
    blogPosts.innerHTML = "";

    posts.forEach(function(post, index) {
        var postElement = document.createElement("div");
        postElement.classList.add("blog-post");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        blogPosts.appendChild(postElement);
    });
}

function deletePost(index) {
    posts.splice(index, 1);
    displayPosts();
}
