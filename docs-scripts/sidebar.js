sidebarToggler = document.querySelector("#sidebar-toggler");
sidebarWrapper = document.querySelector("#sidebar-wrapper");
sidebarContent = document.querySelector("#sidebar-content");

sidebarToggler.addEventListener('click', () => {
    sidebarWrapperClasses = sidebarWrapper.classList;
    sidebarContentClasses = sidebarContent.classList;
    sidebarWrapperClasses.toggle("show");
    sidebarContentClasses.toggle("view");
});