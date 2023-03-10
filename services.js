
const sections = document.querySelectorAll('section');
const options = {
  rootMargin: '-50px 0px -50px 0px',
  threshold: 0.2
};
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const targetId = '#' + entry.target.id;
      const link = document.querySelector(`nav a[href="${targetId}"]`);
      link.classList.add('active');
    } else {
      const targetId = '#' + entry.target.id;
      const link = document.querySelector(`nav a[href="${targetId}"]`);
      link.classList.remove('active');
    }
  }
}, options);
for (const section of sections) {
  observer.observe(section);
}
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu-container');
toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

const links = document.querySelectorAll('.menu-container a');
for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
}
