let page = document.querySelector("body");
page.style.margin = "0px";

//header
let header = document.createElement("header");
let logo = document.createElement("div");
let nav = document.createElement("nav");
let ul = document.createElement("ul");

let TextLogo = document.createTextNode("Elzero");

header.className = "website-head";
logo.className = "logo";
ul.className = "menu";
let TextA = ["Home", "About", "Setvice", "Contact"];
for (let i = 0; i < TextA.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  ul.appendChild(li);
  li.appendChild(a);
  let TextLogo = document.createTextNode(TextA[i]);
  a.appendChild(TextLogo);
}
logo.appendChild(TextLogo);
nav.appendChild(ul);
header.appendChild(logo);
header.appendChild(nav);

document.body.appendChild(header);
header.style.cssText = `  display: flex;
align-items: center;
justify-content: space-between;
background-color: #fff;  padding: 10px;
`;
logo.style.cssText = `color: rgb(0 135 83);
font-weight: bold;
font-size: 1.5rem;`;
ul.style.cssText = `display: flex;
align-items: center;  list-style: none;
gap: 2rem;`;

// content
let content = document.createElement("div");
content.className = "content";
for (let j = 1; j <= 15; j++) {
  let product = document.createElement("div");
  let span = document.createElement("span");
  let TextProduct = document.createTextNode("product");
  let TextSpan = document.createTextNode(j);
  span.appendChild(TextSpan);
  product.className = "product";
  content.appendChild(product);
  product.appendChild(span);
  product.appendChild(TextProduct);
  product.style.cssText = `background-color: #fff;
  width: 260px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #999;`;
  span.style.cssText = `font-size: 1.5rem;
  color: #000;`;
}
content.style.cssText = `background-color: #ddd; padding: 20px;  display: flex;  justify-content: center;
flex-wrap: wrap;
gap: 10px;`;
document.body.appendChild(content);

//fooder
let footer = document.createElement("footer");
let TextFooter = document.createTextNode("Capyright 2022");
footer.style.cssText = `display: flex;
justify-content: center;
padding: 20px;
background: #23A96E;
color: #fff;`;
footer.appendChild(TextFooter);
document.body.appendChild(footer);
