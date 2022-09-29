function openPanel() {
  document.getElementById("panel").style.height = "270px";
  document.getElementById("collapseButton").style.backgroundColor =
    "rgb(58, 51, 51)";
}

function closePanel() {
  document.getElementById("panel").style.height = "0";
  document.getElementById("collapseButton").style.backgroundColor =
    "rgb(238, 245, 227)";
}
