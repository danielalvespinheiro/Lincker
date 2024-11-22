document.addEventListener('DOMContentLoaded', function () {
    const cronogramaLink = document.querySelector('#linkList a[href="/page_cronogrma/crono.html"]');

    if (cronogramaLink) {
        cronogramaLink.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão

            const url = this.href;

            // Redireciona para o link na mesma aba
            setTimeout(() => {
                window.location.href = url;
            }, 500); // Adiciona um delay opcional de 500ms
        });
    }
});


//script do dropdown

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}