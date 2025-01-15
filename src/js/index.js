inxV = 1;
setInterval(() => {
  switchCard(inxV);
  inxV++;
  if (inxV == 4) {
    inxV = 1;
  }
}, 3000);
function switchCard(index) {
  result = Number(index);
  if (result === 1) {
    inxV = 1;
    document.getElementById("div2-0").style.display = "block";
    document.getElementById("p0").style.boxShadow =
      "0 8px 12px rgba(0, 0, 0, 0.2)";
    document.getElementById("div2-1").style.display = "none";
    document.getElementById("p1").style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1)";
    document.getElementById("div2-2").style.display = "none";
    document.getElementById("p2").style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else if (result === 2) {
    inxV = 2;
    document.getElementById("div2-0").style.display = "none";
    document.getElementById("p0").style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1)";
    document.getElementById("div2-1").style.display = "block";
    document.getElementById("p1").style.boxShadow =
      "0 8px 12px rgba(0, 0, 0, 0.2)";
    document.getElementById("div2-2").style.display = "none";
    document.getElementById("p2").style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1)";
  } else if (result === 3) {
    inxV = 3;
    document.getElementById("div2-0").style.display = "none";
    document.getElementById("p0").style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1)";
    document.getElementById("div2-1").style.display = "none";
    document.getElementById("p1").style.boxShadow =
      "0 4px 6px rgba(0, 0, 0, 0.1)";
    document.getElementById("div2-2").style.display = "block";
    document.getElementById("p2").style.boxShadow =
      "0 8px 12px rgba(0, 0, 0, 0.2)";
  }
}
