const date = new Date();
currentDate = date.getFullYear();
const footer = document.querySelector("footer");
const newElement = document.createElement("p");
newElement.innerHTML = `&copy; ${currentDate}  SquareLearn | All Rights Reserved`;
footer.appendChild(newElement);

function moreOption(data) {
  const answer = document.querySelectorAll(".faq-answer");
  const more = document.querySelectorAll(".more");
  answer.forEach((element, index) => {
    if (Number(data) === index + 1) {
      if (element.style.display === "block") {
        element.style.display = "none";
        console.log("running");
        more[data - 1].innerHTML = "+";
      } else {
        element.style.display = "block";
        more[data - 1].innerHTML = "-";
      }
    } else {
      element.style.display = "none";
    }
  });
}
