import './titleBar.scss';
import {flower} from "../deco/titleBarDeco";


export function titleBar() {
    const bar = document.createElement('div');
    bar.id = 'title-bar';
    
    const barBg = document.createElement('div');
    barBg.id = 'title-bar-bg';
    
    barBg.appendChild(derdillaComTitle());
    barBg.appendChild(sectionsBar());
    barBg.appendChild(titleBarDeco())
    bar.appendChild(barBg)
    
    return bar;
}

function derdillaComTitle() {
    const title = document.createElement('a');
    title.innerText = 'DERDILLA.COM';
    title.id = 'derdilla-com-title';
    return title;
}

const sections = ['about', 'projects', 'faq'];
function sectionsBar() {
    const sectContain = document.createElement('div');
    sectContain.id = 'sections-bar';

    for (const sectName of sections) {
        const sectBtn = document.createElement('a');
        sectBtn.classList.add('section-btn');
        sectBtn.innerText = sectName;
        sectBtn.href = `#${sectName}`;
        sectBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const link = event.target.getAttribute("href");
            const target = document.querySelector(link);
            target.scrollIntoView({ behavior: "smooth" });
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