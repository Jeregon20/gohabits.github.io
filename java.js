// Selecciona todas las secciones
const sections = document.querySelectorAll('section');

// Configura el observer
const options = {
    rootMargin: '0px',
    threshold: 0.2
};

// Función para manejar las entradas de observador
const handleIntersect = (entries, observer) => {
    entries.forEach(entry => {
        // Si la sección está en la pantalla, agrega la clase "active"
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // De lo contrario, elimina la clase "active"
            entry.target.classList.remove('active');
        }
    });
};

// Crea el observador
const observer = new IntersectionObserver(handleIntersect, options);

// Observa cada sección
sections.forEach(section => {
    observer.observe(section);
});
var product1Btn = document.getElementById("product1");
product1Btn.addEventListener("click", function() {
  // Lógica para agregar el producto 1 al carrito
});

var product2Btn = document.getElementById("product2");
product2Btn.addEventListener("click", function() {
  // Lógica para agregar el producto 2 al carrito
});

var product3Btn = document.getElementById("product3");
product3Btn.addEventListener("click", function() {
  // Lógica para agregar el producto 3 al carrito
});
