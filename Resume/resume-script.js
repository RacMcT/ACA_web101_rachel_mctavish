window.onload = function() {
  window.setTimeout(image, 8000); //8 seconds
}

function image() {
  document.getElementById('image').style.opacity = '0';
}

//trying to fade out contact info when h2 is clicked//

let contact = document.getElementById('phoneNumber');
document.getElementById('telephone').onclick = function(){
  mylogo.classList.toggle('fade');
}
