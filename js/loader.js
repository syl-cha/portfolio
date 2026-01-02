document.addEventListener('DOMContentLoaded', () => {
  fetch('./src/components/footer.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((data) => {
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch((error) =>
      console.error('Erreur lors du chargement du footer:', error),
    );
});
