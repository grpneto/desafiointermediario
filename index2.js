const btn = document.getElementById("botao")

const input = document.querySelectorAll(".inputs-text");

btn.addEventListener ("click", function () {
    input.forEach (input => {
        const value = input.value.trim();
        const alert = input.nextElementSibling;

        if (value == "") {
            input.classList.add("campo-vazio");
            input.classList.remove("campo-preenchido");
            alert.classList.add("ativar");

        } else if (value != "") {
            input.classList.add("campo-preenchido");
            input.classList.remove("campo-vazio");
            alert.classList.remove("ativar");
        }
    })
});