let btn = document.querySelector('#sidebarCollapse');
let sidebar = document.querySelector('#sidebar');
let btnIcon = document.querySelector('#btn-icon')


btn.onclick = function () {
    sidebar.classList.toggle('active');
}

