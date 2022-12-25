export default function createNav() {
  
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");
  const btnContainer = document.createElement("div");
  const navBar = document.createElement("div");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";

  btnContainer.classList.add("btn-container");
  btnContainer.append(homeBtn, menuBtn, contactBtn);
  navBar.classList.add("nav");
  navBar.appendChild(btnContainer);

  document.body.insertBefore(navBar, document.body.firstChild);
  
  return {homeBtn, menuBtn, contactBtn}
}