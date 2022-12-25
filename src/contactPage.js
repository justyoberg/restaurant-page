import myImage from './restaurant.jpg';

export default function contactPage(nav) {

  nav.contactBtn.style.backgroundColor = "#888";
  nav.menuBtn.style.backgroundColor = "#eee";
  nav.homeBtn.style.backgroundColor = "#eee";
  
  const content = document.querySelector("#content");
  content.innerHTML = "";
  const header = document.createElement("h1");
  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  header.textContent = `Contact Page`;
  image.src = myImage;
  paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
  in culpa qui officia deserunt mollit anim id est laborum.`

  content.appendChild(header);
  content.appendChild(image);
  content.appendChild(paragraph);

}