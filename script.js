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