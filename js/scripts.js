window.onload = function() {
document.getElementById("buttonDark").addEventListener('pointerdown', function() {
  let body = document.body;
  body.style.backgroundColor = "black";
  body.style.color = "white";
});

document.getElementById("buttonLight").addEventListener('pointerdown', function() {
  let body = document.body;
  body.style.backgroundColor = "green";
  body.style.color = "red";
});


}