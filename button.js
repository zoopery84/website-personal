<script>
document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();

    const results = document.querySelectorAll('.search-result');
    results.forEach((result) => {
      const title = result.textContent.toLowerCase();
      if (title.includes(query)) {
        result.style.display = 'block';
      } else {
        result.style.display = 'none';
      }
    });
  });
});
</script>