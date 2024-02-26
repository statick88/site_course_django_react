function toggleInfo() {
  var info = document.getElementById("info");
  var arrow = document.getElementById("arrow");
  if (info.style.display === "none") {
    info.style.display = "block";
    arrow.innerHTML = "&#x25BC;";
  } else {
    info.style.display = "none";
    arrow.innerHTML = "&#x25B6;";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const infoDiv = document.getElementById("info");
  const toggleButton = document.getElementById("toggleButton");

  toggleButton.addEventListener("click", function () {
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }
  });
});
