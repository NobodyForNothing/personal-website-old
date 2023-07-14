import './style.scss';
import {titleBar} from "./titleBar/titleBar";
import {buildTitle, spacer} from "./body/body";
import {buildFooter} from "./footer/footer";

const setupPage = () => {
 document.querySelector('header').appendChild(titleBar([{innerHTML: 'Home', href: './'}], 'BLOG'));
 document.querySelector('main').appendChild(body());
 document.querySelector('footer').appendChild(buildFooter());
}

function body() {
    const container = document.createElement('div');
    container.id = 'body-container';
    
    container.appendChild(spacer((window.screen.width < 1028) ? 10 : 1550));
    container.appendChild(buildTitle('nothing here'));
    container.appendChild(spacer(1000));
    
    return container;
}


document.addEventListener('DOMContentLoaded', setupPage);