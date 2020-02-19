document.addEventListener("DOMContentLoaded", () => {
    const sidebarCollapse = document.querySelector("#sidebarCollapse")
    const sidebar = document.querySelector("#sidebar")
    const navbar = document.querySelector(".navbar")
    const navItem = document.querySelectorAll(".nav-item")
    const dropdownMenu = document.querySelectorAll(".dropdown-menu")
    const odern = sidebar.querySelector("#odern")

    function changeNavebar() {
        sidebar.classList.toggle("active")
        odern.classList.toggle("active")
    };

    function changeAnotherWayNavebar() {
        sidebar.classList.toggle("hideActive");
        navbar.classList.toggle("navbarHideActive");
        setTimeout(() => {
            // sidebar.style.display = "none";
        }, 1000)
    };
    let windowWidth = window.innerWidth;

    function sizeChange() {
        const w = window.innerWidth;
       
        if (w <= 992 && w >= 460) {
            sidebar.classList.add("active");
            windowWidth = w;
            sidebarCollapse.removeEventListener("click", changeNavebar);
            sidebarCollapse.addEventListener("click", changeAnotherWayNavebar);
            odern.classList.add("active")
        };
        if (w >= 992) {
            sidebar.classList.remove("active");
            navbar.classList.remove("navbarHideActive")
            windowWidth = w;
            sidebarCollapse.removeEventListener("click", changeAnotherWayNavebar);
            sidebarCollapse.addEventListener("click", changeNavebar);
            odern.classList.remove("active")
        }
    }

    sidebarCollapse.addEventListener("click", changeNavebar);
    ['load', 'resize'].forEach((name) => {
        window.addEventListener(name, sizeChange)
    });
})