var name = document.getElementById('name');

h1.addEventListener('click', function(){
  if (h1('hide') !== -1) {
    fadeIn(img);
    this.innerHTML = 'Fade Out';
  }
  else {
    fadeOut(h1);
    this.innerHTML = 'Fade In';
  }
});