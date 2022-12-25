import pageLoad from './pageLoad.js';
import menuPage from './menuPage.js';
import contactPage from './contactPage.js';
import createNav from './createNav.js'
import style from './style.css';

const nav = createNav();
pageLoad(nav);

nav.homeBtn.addEventListener('click', () => pageLoad(nav));
nav.menuBtn.addEventListener('click', () => menuPage(nav));
nav.contactBtn.addEventListener('click', () => contactPage(nav));
