import "./footer.scss";

export function buildFooter(){
    const container = document.createElement('div');
    container.id = 'footer';
    
    container.appendChild(footerItem('Source Code', 'https://github.com/nobodyfornothing/personal-website'));    
    return container;
}

function footerItem(text, link) {
    const link = document.createElement('a');
    link.classList.add('footer-item');
    link.innerHTML = text;
    link.href = link;
    return link;
}
