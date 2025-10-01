document.addEventListener('DOMContentLoaded', function() {
  const langBtn = document.getElementById('lang-btn');
  const langSwitcher = document.getElementById('lang-switcher');

  langBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langSwitcher.classList.toggle('active');
  });

  document.addEventListener('click', function() {
    langSwitcher.classList.remove('active');
  });
});
