// Definir la función globalmente
function search() {
    var searchInput = document.getElementById("searchInput");
    var searchTerm = searchInput.value.trim().toLowerCase();
    var titles = document.querySelectorAll("h2.card-title");

    titles.forEach(function (title) {
        var titleText = title.textContent.toLowerCase();
        if (titleText.includes(searchTerm)) {
            var parentPage = title.closest("[data-page]");
            if (parentPage) {
                window.location.href = parentPage.getAttribute("data-page");
            }
        }
    });
}

var searchInput = document.getElementById("searchInput");
var searchForm = document.getElementById("searchForm");

// Escuchar el evento de entrada para activar la búsqueda
searchInput.addEventListener("input", search);

// Escuchar el evento de envío del formulario para activar la búsqueda
searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario
    search(); // Realizar la búsqueda
});

function realizarBusqueda() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toUpperCase();
  const contenedor = document.querySelector('.contenedor'); // Corregido el typo en 'contenedor'
  const items = contenedor.getElementsByTagName('div');

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.innerHTML.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
  return false; // Evita que el formulario se envíe realmente
}

