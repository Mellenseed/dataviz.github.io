function setClasses(el) {
  const isScrollable = el.scrollHeight > el.clientHeight;

  if (!isScrollable) {
    el.classList.remove('is-bottom-overflowing', 'is-top-overflowing');
    return;
  }

  const isScrolledToBottom = el.scrollHeight < el.clientHeight + el.scrollTop + 1;
  const isScrolledToTop = isScrolledToBottom ? false : el.scrollTop === 0;
  el.classList.toggle('is-bottom-overflowing', !isScrolledToBottom);
  el.classList.toggle('is-top-overflowing', !isScrolledToTop);
}

document.querySelector('#headertext').addEventListener('scroll', (e) => {
  const el = e.currentTarget;
  setClasses(el);
});

setClasses(document.querySelector('#headertext'));

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function change() {
  const buttons = document.querySelectorAll('.dropdown-button');
  for (const button of buttons) {
    button.addEventListener("click", event => {
      document.getElementById("nyc").innerHTML = event.target.textContent;
      document.getElementById("idea").innerHTML = event.target.value;
    });
  }

}



function change(element) {
  element.classList.toggle("fullsize");

}