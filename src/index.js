import './style.scss';
import {titleBar} from "./titleBar/titleBar";
import {body} from "./body/body";

const setupPage = () => {
 document.querySelector('header').appendChild(titleBar());
 document.querySelector('main').appendChild(body());
}


document.addEventListener('DOMContentLoaded', setupPage);

window.addEventListener('scroll', () => {
 document.body.style.setProperty('--scroll', window.pageYOffset / window.innerHeight);
 }, false);