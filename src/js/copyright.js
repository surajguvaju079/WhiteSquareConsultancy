const date = new Date();
currentDate = date.getFullYear();
const footer = document.querySelector("footer");
const newElement = document.createElement("p");
newElement.innerHTML = `<h2>&copy; ${currentDate}  SquareLearn | All Rights Reserved</h2>`;
footer.appendChild(newElement);
