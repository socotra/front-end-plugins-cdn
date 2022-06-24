(function insertPinkButton() {
  var button = document.createElement("button");
  button.innerHTML = "Pink Button";
  button.style =
    "border-radius:40px;height:200px;width:400px;background-color:pink;color:white;bottom:0;left:0;position:absolute;z-index:9999;margin:120px";
  document.body.appendChild(button);
  return insertPinkButton;
})();
