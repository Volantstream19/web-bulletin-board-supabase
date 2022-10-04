// imports
import { uploadImage } from '../fetch-utils.js';

// DOM Elements
const imageInput = document.getElementbyid('image-input');
const preview = document.getElementbyid('image-preview');
const postForm = document.getElementbyid('post-form');

// state
let error = null;

//events
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
    } else {
        preview.src = 'assets/dog.png';
    }
});

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const imageFile = formData.get('image');
    const randomFolder = Math.floor(Date.now() * Math.random());
    const imagePath = `posts/${randomFolder}/${imageFile.name}`;

    const url = await uploadImage('posts', imagePath, imageFile);
});
