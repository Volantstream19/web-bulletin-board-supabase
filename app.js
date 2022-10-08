/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { getPosts } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

/* Get DOM Elements */
const postList = document.getElementById('post-list');
const errorDisplay = document.getElementById('error-display');

/* State */
let posts = [];
let error = null;

/* Events */
window.addEventListener('load', async () => {
    const response = await getPosts();

    posts = response.data;
    error = response.error;

    if (error) {
        displayError();
    } else {
        displayPosts();
    }
});

/* Display Functions */
function displayPosts() {
    postList.innerHtml = '';

    for (const post of posts) {
        console.log(post);
        const postEl = renderPost(post);
        postList.append(postEl);
    }
}

function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
