function openPanel() {
  document.getElementById("panel").style.height = "300px";
  document.getElementById("collapseButton").style.backgroundColor =
    "rgb(58, 51, 51)";
  document.getElementById("collapsedDiv").style.display = "block";
}

function closePanel() {
  document.getElementById("panel").style.height = "0";
  document.getElementById("collapseButton").style.backgroundColor =
    "rgb(238, 245, 227)";
   document.getElementById("collapsedDiv").style.display = "none"; 
}
