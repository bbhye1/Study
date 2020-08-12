const filter = document.getElementById('filter');
const postContainer = document.querySelector('.post-container');
const loder = document.querySelector('.loader');

let limit = 3;
let page = 1;

// Fetch API
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();

    return data;
}

//Show posts

async function showPosts() {
    const data = await getPosts();

    data.forEach(post => {
        const postElem = document.createElement('div');
        postElem.classList.add('post');
        postElem.innerHTML = `
            <div class="number">${post.id}</div>
                <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}
                </p>
            </div>`
        postContainer.appendChild(postElem);
    });
}

showPosts();