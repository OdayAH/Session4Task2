document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('search-toggle');
  const searchInput = document.getElementById('search-input');

  toggleBtn.addEventListener('click', () => {
    if (searchInput.style.display === 'block') {
      searchInput.style.display = 'none';
    } else {
      searchInput.style.display = 'block';
      searchInput.focus();
    }
  });
});