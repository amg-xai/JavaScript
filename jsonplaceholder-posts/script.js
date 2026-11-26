const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsGrid = document.getElementById('postsGrid');
const statusMessage = document.getElementById('statusMessage');
const searchInput = document.getElementById('searchInput');
const refreshBtn = document.getElementById('refreshBtn');

let allPosts = [];

// 1. Fetch posts using async/await
async function fetchPosts() {
  statusMessage.textContent = '⏳ Loading posts...';
  postsGrid.innerHTML = '';
  searchInput.value = ''; // clear old search when posts reload

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    allPosts = await response.json();
    statusMessage.textContent = '';
    renderPosts(allPosts);
  } catch (error) {
    statusMessage.innerHTML = `
      <p style="color: #ef4444;">❌ Failed to load posts: ${error.message}</p>
      <button onclick="fetchPosts()" style="margin-top: 10px; padding: 6px 14px; cursor: pointer;">Try Again</button>
    `;
  }
}

// 2. Render cards onto the grid
function renderPosts(posts) {
  if (posts.length === 0) {
    postsGrid.innerHTML = '<p class="status-message">No matching posts found.</p>';
    return;
  }

  postsGrid.innerHTML = posts
    .map(
      (post) => `
      <article class="post-card">
        <div>
          <div class="post-header">
            <span class="badge-id">#${post.id}</span>
            <span class="author-id">User ID: ${post.userId}</span>
          </div>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}</p>
        </div>
      </article>
    `
    )
    .join('');
}

// 3. Search Filter
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.body.toLowerCase().includes(searchTerm)
  );
  renderPosts(filtered);
});

// 4. Refresh Button
refreshBtn.addEventListener('click', fetchPosts);

// Initial Load
fetchPosts();