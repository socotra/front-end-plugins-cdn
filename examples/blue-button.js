(function insertBlueButton() {
  // Use the designated element to insert the blue button
  // This element will be removed at logout
  var fePlugins = document.getElementById("fe-plugins");

  // Create the element
  var button = document.createElement("button");
  button.innerHTML = "Blue Button";
  button.style =
    "border-radius:40px;height:200px;width:400px;background-color:blue;color:white;bottom:0;right:0;position:absolute;z-index:9999;margin:120px";

  // Attach the element to the landing zone
  fePlugins.appendChild(button);

  return insertBlueButton;
})(); // hello
