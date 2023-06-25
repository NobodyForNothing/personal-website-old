import './titleBar.scss';


export function titleBar() {
    const bar = document.createElement('div');
    bar.id = 'title-bar';
    
    const barBg = document.createElement('div');
    barBg.id = 'title-bar-bg';
    
    barBg.appendChild(derdillaComTitle());
    barBg.appendChild(sectionsBar());
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
        sectContain.appendChild(sectBtn);
    }

    return sectContain;
}