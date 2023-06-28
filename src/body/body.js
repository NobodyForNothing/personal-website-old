import './body.scss';

export function buildTitle(text) {
    const title = document.createElement('h1');
    textOrChild(title, text);
    title.classList.add('title');

    const anchor = document.createElement('div');
    anchor.id = text;
    anchor.classList.add('title-anchor');

    title.appendChild(anchor);
    return title;
}

export function buildParagraph(text) {
    const paragraph = document.createElement('p');
    textOrChild(paragraph, text);
    return paragraph;
}

export function buildProjectCard(title, description, link, img) {
    const titleElement = document.createElement('h2');
    textOrChild(titleElement, title);
    const descriptionElement = buildParagraph(description);
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('project-thumb');
    imgContainer.appendChild(img)

    const innerCard = document.createElement('a');
    innerCard.href = link;
    innerCard.appendChild(imgContainer);
    innerCard.appendChild(titleElement);
    innerCard.appendChild(descriptionElement);

    const card = document.createElement('div');
    card.classList.add('project-card');
    card.appendChild(innerCard);
    card.onclick = (e) => {innerCard.click()};

    return card;
}

export function qa(q, a) {
    const question = document.createElement('h2');
    question.innerText = q;
    const answer = buildParagraph(a);

    const container = document.createElement('div');
    container.appendChild(question);
    container.appendChild(answer);
    return container;
}

export function spacer(height) {
    const spacer = document.createElement('div');
    spacer.style.height = `${height}px`;
    return spacer;
}

export function webText(url) {
    const text = document.createElement('div');
    text.innerText = 'loading...';
    fetch(url).then(async (res) => {
        text.innerHTML = await res.text();
    })
    return text;
}

export function webImg(url, opt_width) {
    const img = document.createElement('img');
    if (opt_width) img.width = opt_width;
    img.src = url;
    return img;
}

export function textOrChild(parent, content) {
    if (typeof content === "string") {
        parent.innerText = content;
    } else {
        parent.appendChild(content);
    }
}