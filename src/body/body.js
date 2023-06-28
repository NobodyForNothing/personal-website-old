import './body.scss';

export function body() {
    const container = document.createElement('div');
    container.id = 'body-container';
    
    container.appendChild(spacer((window.screen.width < 1028) ? 10 : 1550));
    container.appendChild(about());
    container.appendChild(projects());
    container.appendChild(faq());
    container.appendChild(spacer(1600));
    
    return container;
}

function about() {
    const section = document.createElement('div');
    
    section.appendChild(buildTitle('about'));
    section.appendChild(buildParagraph("Hey there! I'm DerDilla, a self-proclaimed hobbyist developer from Germany."));
    /* ai bs
    section.appendChild(buildParagraph("My journey into the world of programming began as a self-taught developer, and I've honed my skills in languages like Java, Dart, Python, and JavaScript. With a solid foundation in these languages, I've eagerly embraced the challenge of Rust, even if it occasionally leaves me feeling a bit rusty. Nonetheless, this hasn't stopped me from pushing boundaries and exploring the vast possibilities that different programming languages offer."));
    section.appendChild(buildParagraph("But hey, I don't want to give the impression that I've been on this coding journey all by myself! While I kick-started my coding adventure through self-teaching, I've also had the incredible opportunity to study computer science in school. These educational experiences have been like rocket fuel for my coding passion, equipping me with a solid foundation in fundamental concepts and problem-solving techniques. It's been a delightful blend of self-discovery and formal education that has shaped my understanding of coding and fueled my enthusiasm for taking on exciting challenges."));
    */
    section.appendChild(buildParagraph("So, what inspired me to create this website? Well, there are two main reasons. Firstly, I found myself with an abundance of time and a burning desire to delve deeper into web development. This led me to embark on the exciting journey of creating my own corner of the internet."));
    section.appendChild(buildParagraph("Secondly, I think that individuals should have control over their digital presence, free from reliance on big social media companies. I encourage everyone to build their own websites and shape their online identities according to their own vision."));
    section.appendChild(buildParagraph("If you're curious about my projects, be sure to check out the dedicated section below. There, you'll find a showcase of my endeavors and the exciting challenges I've taken on."));
    
    return section;
}

function projects() {
    const section = document.createElement('div');
    section.appendChild(buildTitle('projects'));

    const projectsGrid = document.createElement('div');
    projectsGrid.classList.add('projects-grid');

    projectsGrid.appendChild(buildProjectCard(
        'Blood pressure monitor',
        webText('https://raw.githubusercontent.com/NobodyForNothing/blood-pressure-monitor-fl/main/fastlane/metadata/android/en-US/full_description.txt'),
        'https://github.com/NobodyForNothing/blood-pressure-monitor-fl',
        webImg('https://github.com/NobodyForNothing/blood-pressure-monitor-fl/blob/main/fastlane/metadata/android/en-US/images/icon.png?raw=true')
    ));
    projectsGrid.appendChild(buildProjectCard(
        'Gamepad mouse',
        'Use your controller as a mouse',
        'https://github.com/NobodyForNothing/gamepad_mouse',
        webImg('https://github.com/NobodyForNothing/gamepad_mouse/blob/master/controller_bindings.png?raw=true')
        ));
    section.appendChild(projectsGrid);
    
    return section;
}

function faq() {
    const section = document.createElement('div');

    section.appendChild(buildTitle('faq'));

    function qa(q, a) {
        const question = document.createElement('h2');
        question.innerText = q;
        const answer = buildParagraph(a);

        const container = document.createElement('div');
        container.appendChild(question);
        container.appendChild(answer);
        return container;
    }

    section.appendChild(qa('What does derdilla mean?', "Nothing really. It's just pseudonym."));
    section.appendChild(qa('Wow, you have amazing formulations! Did you study linguistics?', "No, that's just ChatGPT. This might as well be the only thing it's useful for"));

    return section;
}



function buildTitle(text) {
    const title = document.createElement('h1');
    textOrChild(title, text);
    title.classList.add('title');

    const anchor = document.createElement('div');
    anchor.id = text;
    anchor.classList.add('title-anchor');

    title.appendChild(anchor);
    return title;
}

function buildParagraph(text) {
    const paragraph = document.createElement('p');
    textOrChild(paragraph, text);
    return paragraph;
}

function buildProjectCard(title, description, link, img) {
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

function spacer(height) {
    const spacer = document.createElement('div');
    spacer.style.height = `${height}px`;
    return spacer;
}

function webText(url) {
    const text = document.createElement('div');
    text.innerText = 'loading...';
    fetch(url).then(async (res) => {
        text.innerHTML = await res.text();
    })
    return text;
}

function webImg(url, opt_width) {
    const img = document.createElement('img');
    if (opt_width) img.width = opt_width;
    img.src = url;
    return img;
}

function textOrChild(parent, content) {
    if (typeof content === "string") {
        parent.innerText = content;
    } else {
        parent.appendChild(content);
    }
}