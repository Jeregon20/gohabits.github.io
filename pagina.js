const searchBox = document.querySelector('.search-box');
const input = searchBox.querySelector('input[type="text"]');
const button = searchBox.querySelector('button');

button.addEventListener('click', () => {
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    alert(`Buscando "${searchTerm}"...`);
    input.value = '';
  }
});
