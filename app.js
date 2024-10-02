function contact(event) {
    event.preventDefault()
const loading = document.querySelector(`.modal__overlay--loading`);
const success = document.querySelector(`.modal__overlay--success`);
loading.classList += " modal__overlay--visible";

emailjs

.sendForm(
    'service_6b6kzit',
    `template_84ni2o4`,
     event.target,
    `9eu3l_PvVIzJ513kF`)
    .then(() => {
        loading.classList.remove(`modal__overlay--visible`);
    success.classList += " modal__overlay--visible";

    }) .catch(() => {
        loading.classList.remove(`modal__overlay--visible`);
        alert(`The email service is temporarily unavaible at this time. Please contact me directly`)

    })
    }
    

let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false; 
            return document.body.classList.remove("modal__open");
        }
 isModalOpen = true
     document.body.classList += " modal__open";
    }