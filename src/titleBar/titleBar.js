import './titleBar.scss';


export function titleBar() {
    const bar = document.createElement('div');
    bar.id = 'title-bar';
    
    const barBg = document.createElement('div');
    barBg.id = 'title-bar-bg';
    
    barBg.appendChild(derdillaComTitle());
    bar.appendChild(barBg)
    
    return bar;
}

function derdillaComTitle() {
    const title = document.createElement('a');
    title.innerText = 'DERDILLA.COM';
    title.id = 'derdilla-com-title';
    return title;
}