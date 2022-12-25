export default function createNav() {
  
  const homeBtn = document.createElement("button");
  const aboutBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const btnContainer = document.createElement("div");
  const navBar = document.createElement("div");

  homeBtn.textContent = "Home";
  aboutBtn.textContent = "About";
  contactBtn.textContent = "Contact";

  btnContainer.classList.add("btn-container");
  btnContainer.append(homeBtn, aboutBtn, contactBtn);
  navBar.classList.add("nav");
  navBar.appendChild(btnContainer);

  document.body.insertBefore(navBar, document.body.firstChild);
}