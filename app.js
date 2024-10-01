//template_84ni2o4
//service_xlbkjaq
//9eu3l_PvVIzJ513kF

function contact(event){
    event.preventdefault();
        emailjs
        .sendform (
            `service_xlbkjaq`,
            `template_84ni2o4`,
            event.target,
            `9eu3l_PvVIzJ513kF`


            const loading = document.querySelector(`.modal__overlay--loading`)
            const success = document.querySelector(`.modal__overlay--success`)
            

        ).then(() => {
            console.log(`this worked1`)
        })
    
}