import "./footer.scss";

export function buildFooter(){
    const container = document.createElement('div');
    container.id = 'footer';
    const grid = document.createElement('div');
    grid.id = 'footer-grid';

    grid.appendChild(footerItem('GitHub', 'https://github.com/nobodyfornothing'));
    grid.appendChild(footerItem('Google Play', 'https://play.google.com/store/apps/developer?id=DerDillaApps0'))
    grid.appendChild(footerItem('contact@derdilla.com', '#', (e) => {console.log(e);e.preventDefault(); window.open('mailto:test@example.com')}));
    grid.appendChild(footerItem('Source Code', 'https://github.com/nobodyfornothing/personal-website'));

    container.appendChild(grid);
    return container;
}

function footerItem(text, link, opt_onclick) {
    const linkElement = document.createElement('a');
    linkElement.classList.add('footer-item');
    linkElement.innerHTML = text;
    linkElement.href = link;
    if (opt_onclick) linkElement.onclick = opt_onclick;

    return linkElement;
}
