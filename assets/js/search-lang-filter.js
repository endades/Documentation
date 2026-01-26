// search-lang-filter.js
// Filtra resultados de búsqueda de MkDocs por idioma
document.addEventListener("DOMContentLoaded", function() {
    // Detecta el idioma actual a partir de la URL
    const currentLang = window.location.pathname.split('/')[1]; // ej: 'en', 'es'

    // Solo modificar si existe la barra de búsqueda
    if (window.search && search.init) {
        const originalInit = search.init;

        search.init = function() {
            // Llama al init original
            originalInit();

            // Intercepta el método que genera resultados de búsqueda
            const originalAddResults = search.addResults;

            search.addResults = function(results) {
                // Filtra resultados por idioma
                const filteredResults = results.filter(result => {
                    const path = result.location || result.url || "";
                    return path.startsWith(`/${currentLang}/`);
                });

                // Llama al método original con los resultados filtrados
                originalAddResults(filteredResults);
            };
        };
    }

    console.log(`search-lang-filter.js cargado. Filtrando resultados para: ${currentLang}`);
});
