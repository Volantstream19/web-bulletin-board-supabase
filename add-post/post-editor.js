// imports
import { createPost, uploadImage } from '../fetch-utils.js';

// DOM Elements
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');
const imageInput = document.getElementById('image-input');
const preview = document.getElementById('image-preview');

// state
let error = null;

//events
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = '../assets/download (6).jpg';
    }
});

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const imageFile = formData.get('image_url');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `image-post/${randomFolder}/${imageFile.name}`;
    const url = await uploadImage('image-post', imagePath, imageFile);

    const post = {
        title: formData.get('title'),
        bio: formData.get('bio'),
        contact: formData.get('contact'),
        image_url: url,
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
