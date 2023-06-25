import './style.scss';
import {titleBar} from "./titleBar/titleBar";

const setupPage = () => {
 document.querySelector('header').appendChild(titleBar());
 
 const tmp = document.createElement('div');
 tmp.style.height = '1500px';
  document.querySelector('footer').appendChild(tmp);
}

document.addEventListener('DOMContentLoaded', setupPage);

window.addEventListener('scroll', () => {
 document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
 }, false);