let btn = document.querySelector('#sidebarCollapse');

let sidebar = document.querySelector('#sidebar');

let btnIcon = document.querySelector('#btn-icon')

let modalButtons = document.querySelectorAll('.modal_button');

const postsBtn = document.getElementById('posts')

const aboutUsBtn = document.getElementById('about-us')

const forms = document.querySelectorAll('form');

const mainPage = document.getElementById('main');

const aboutUsPage = document.getElementById("container")

const fadeInClass = "fade-in";

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
}, 15000);


forms.forEach(form => {
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
    }

    form.classList.add('was-validated');
  });
});


postsBtn.addEventListener("click", () => {
  fetchData()
  mainPage.classList.remove("d-none");
  mainPage.classList.add(fadeInClass)
  aboutUsPage.classList.add("d-none");
})

aboutUsBtn.addEventListener("click", () => {
  aboutUsPage.classList.remove("d-none");
  aboutUsPage.classList.add(fadeInClass);
  mainPage.classList.add("d-none");
  
})


