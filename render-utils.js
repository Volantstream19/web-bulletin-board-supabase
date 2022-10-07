export function renderPost(post) {
    const li = document.createElement('li');

    const a = document.createElement('a');

    const h2 = document.createElement('h2');
    h2.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.bio;

    const h3 = document.createElement('h3');
    h3.textContent = post.contact;

    a.append(h2, p, h3);
    li.append(a);
    return li;
}
