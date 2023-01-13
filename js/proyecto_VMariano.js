function validaciones() {
    const $form = document.querySelector(".contact-formulario");
    const $inputs = document.querySelectorAll(".contact-formulario [required]");

    $inputs.forEach((el) => {
        const $span = document.createElement("span");
        $span.id = el.name;
        $span.textContent = el.title;
        $span.classList.add("contact-formulario-error", "none");
        el.insertAdjacentElement("afterend", $span)
    });

    document.addEventListener("keyup", (e) => {

        if(e.target.matches(".contact-formulario [required]")) {
            let patron = e.target.pattern || e.target.dataset.pattern;

            if(patron && e.target.value !== "") {
                let regex = new RegExp(patron);
                return !regex.exec(e.target.value) ? document.getElementById(e.target.name).classList.add("is-active") : document.getElementById(e.target.name).classList.remove("is-active");
            }

            if(!patron) {
                return e.target.value === "" ? document.getElementById(e.target.name).classList.add("is-active") : document.getElementById(e.target.name).classList.remove("is-active");

            }
        }
    });

    
}

validaciones();