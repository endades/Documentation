document.addEventListener('DOMContentLoaded', function() {
    const query = new URLSearchParams(window.location.search).get('q');
    if (query) {
        const searchTerms = query.split(' ');
        const content = document.querySelector('.wy-nav-content');
        if (content) {
            searchTerms.forEach(term => {
                const regex = new RegExp(`(${term})`, 'gi');
                content.innerHTML = content.innerHTML.replace(regex, '<span style="background-color: yellow;">$1</span>');
            });
        }
    }
});
