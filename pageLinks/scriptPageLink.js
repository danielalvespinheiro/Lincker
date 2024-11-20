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
