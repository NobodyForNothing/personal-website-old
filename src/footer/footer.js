import "./footer.scss";

export function buildFooter(){
    const container = document.createElement('div');
    container.id = 'footer';
    
    container.appendChild(footerItem('Source Code', 'https://github.com/nobodyfornothing/personal-website'));    
    return container;
}

function footerItem(text, link) {
    const linkElement = document.createElement('a');
    linkElement.classList.add('footer-item');
    linkElement.innerHTML = text;
    linkElement.href = link;
    return linkElement;
}
