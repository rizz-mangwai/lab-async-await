// Write your code here!

// Main async function to fetch and display posts
async function fetchAndDisplayPosts() {
    try {
        // 1. Fetch data from the external API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        // 2. Pass the posts to the display function
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Function to display posts (as specified in the lab)
function displayPosts(posts) {
    const postList = document.getElementById('post-list');

    // Optional: Clear any existing items
    postList.innerHTML = '';

    // Loop through the posts
    posts.forEach(post => {
        // Create li element
        const li = document.createElement('li');

        // Create h1 for title
        const h1 = document.createElement('h1');
        h1.textContent = post.title;

        // Create p for body
        const p = document.createElement('p');
        p.textContent = post.body;

        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);

        // Append li to the ul#post-list
        postList.appendChild(li);
    });
}

// Start the process when the page loads
fetchAndDisplayPosts();