import './titleBar.scss';
import {flower} from "../deco/titleBarDeco";


export function titleBar(sections, title='DERDILLA.COM') {
    const bar = document.createElement('div');
    bar.id = 'title-bar';
    
    const barBg = document.createElement('div');
    barBg.id = 'title-bar-bg';
    
    barBg.appendChild(derdillaComTitle(title));
    barBg.appendChild(sectionsBar(sections));
    barBg.appendChild(titleBarDeco())
    bar.appendChild(barBg)
    
    return bar;
}

function derdillaComTitle(text) {
    const title = document.createElement('a');
    title.innerText = text;
    title.id = 'derdilla-com-title';
    return title;
}

function sectionsBar(sections) {
    const sectContain = document.createElement('div');
    sectContain.id = 'sections-bar';

    for (const sect of sections) {
        const sectBtn = document.createElement('a');
        sectBtn.classList.add('section-btn');
        sectBtn.innerHTML = sect.innerHTML;
        sectBtn.href = sect.href;
        sectBtn.addEventListener('click', (event) => {
            const link = event.target.getAttribute("href");
            if (link.charAt(0) === '#') {
                event.preventDefault();
                const target = document.querySelector(link);
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
        sectContain.appendChild(sectBtn);
    }

    return sectContain;
}

function titleBarDeco() {
    const decoContainer = document.createElement('div');
    decoContainer.id = 'title-bar-deco';

    const goodLeafeCounts = [4,6,12];
    function randomFlower() {
        let c = goodLeafeCounts.splice(Math.floor(Math.random() * goodLeafeCounts.length), 1)[0];
        console.log(goodLeafeCounts.toString());
        if (c === undefined) {
            c = 6;
        }
        return flower(c, '#6fbbe4', 5, 300);
    }

    const flower1 = randomFlower();
    flower1.id = 'title-deco-e1';
    const flower2 = randomFlower();
    flower2.id = 'title-deco-e2';

    decoContainer.appendChild(flower1);
    decoContainer.appendChild(flower2);
    return decoContainer
}

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / window.innerHeight);
    }, false);