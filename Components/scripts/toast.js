liveToastBtn = document.querySelector("#live-toast-btn");
liveToast = document.querySelector("#live-toast");
closeBtnToast=document.querySelector("#close-btn-toast");

liveToastBtn.addEventListener('click', toastHandler);
function toastHandler(){
 liveToastClasses =  liveToast.classList;
 liveToastClasses.toggle("show");
}
closeBtnToast.addEventListener('click', toastCloseHandler);
function toastCloseHandler(){
    liveToastClasses =  liveToast.classList;
    liveToastClasses.toggle("show");
}