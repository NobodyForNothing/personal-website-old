import './body.scss';

export function body() {
    const container = document.createElement('div');
    container.id = 'body-container';
    
    container.appendChild(spacer(1600));
    container.appendChild(about());
    container.appendChild(projects());
    container.appendChild(faq());
    container.appendChild(spacer(1600));
    
    return container;
}

function about() {
    const section = document.createElement('div');
    
    section.appendChild(buildTitle('about'));
    section.appendChild(buildParagraph('I\'m a dev, lol'));
    
    return section;
}

function projects() {
    const section = document.createElement('div');
    
    section.appendChild(buildTitle('projects'));
    section.appendChild(buildParagraph('- blood pressure monitor\n- gamepad mouse'));
    
    return section;
}

function faq() {
    const section = document.createElement('div');

    section.appendChild(buildTitle('faq'));
    section.appendChild(buildParagraph('What does derdilla mean?\n    Nothing really. It\'s just pseudonym.\n\n    Yep, still just a pseudonym...'));

    return section;
}



function buildTitle(text) {
    const title = document.createElement('h1');
    title.innerText = text;
    title.id = text;
    return title;
}

function buildParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;
    return paragraph;
}

function spacer(height) {
    const spacer = document.createElement('div');
    spacer.style.height = `${height}px`;
    return spacer;
}