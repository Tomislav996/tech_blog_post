let btn = document.querySelector('#sidebarCollapse');
let sidebar = document.querySelector('#sidebar');
let btnIcon = document.querySelector('#btn-icon')
let modalButtons = document.querySelectorAll('.modal_button');


btn.onclick = function () {
    sidebar.classList.toggle('active');
}

let isOtherModalClicked = false;


modalButtons.forEach(button => {
  button.addEventListener("click", () => {
    isOtherModalClicked = true;
  })
})

setTimeout(function() {
  if(!isOtherModalClicked) {
    let myModal = new bootstrap.Modal(document.getElementById('modal-popup'));
    myModal.show();
  }
}, 1000);
