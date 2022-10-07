// imports
import { createPost } from '../fetch-utils.js';

// DOM Elements
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');

// state
let error = null;

//events

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const post = {
        title: formData.get('title'),
        bio: formData.get('bio'),
        contact: formData.get('contact'),
    };

    const repsonse = await createPost(post);
    error = repsonse.error;

    if (error) {
        displayError();
    } else {
        location.assign('/');
    }
});
function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
