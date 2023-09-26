const botoncito = document.getElementById("boton");
const campoBusqueda = document.getElementById("buscador");
const listaPersonas = document.getElementById("lista-personas");
let personas = []; 

cargarDatosDesdeJSON();

async function cargarDatosDesdeJSON() {
    const dataURL = "https://api.npoint.io/38947466068b72a8dadb";

    try {
        const response = await fetch(dataURL); 
        personas = await response.json(); 

        mostrarPersonas(personas);
    } catch (error) {
        console.error("Error al cargar los datos:", error);
    }
}

botoncito.addEventListener("click", realizarBusqueda);

function realizarBusqueda() {
    const term = campoBusqueda.value.toLowerCase();
    const personasFiltradas = personas.filter(persona => {
        return persona.name.toLowerCase().includes(term) || persona.country.toLowerCase().includes(term) || persona.phone.includes(term);
    });

    mostrarPersonas(personasFiltradas);
}

function mostrarPersonas(personasAMostrar) {
    listaPersonas.innerHTML = personasAMostrar.map(persona => `
        <li class="persona">
            <h2>${persona.name}</h2>
            <p>Pais: ${persona.country}</p>
            <p>Teléfono: ${persona.phone}</p>
        </li>
    `).join("");
}

const body = document.body;
   if (localStorage.mode === 'dark') {
    body.classList.add("noche")
  };
 
  function toggleLook() {
    body.classList.toggle("noche");
    localStorage.setItem(
      'mode', localStorage.mode === 'light' || localStorage.mode === undefined ? 'dark' : 'light'
      );
  }