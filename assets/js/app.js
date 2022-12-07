const casasContainer = document.getElementById("casasContainer")
const piezas = document.getElementById("inpDorm")
const maxValue = document.getElementById("inpMax")
const minValue = document.getElementById("inpMin")
const formulario = document.getElementById("searchForm")
const casasList = [{
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "./assets/img/casa1.avif",
    cuartos: 2,
    m: 110,
  },
  {
    name: "Casa en el bosque",
    description: "Despierta tus días oyendo la naturaleza",
    src: "./assets/img/casa2.avif",
    cuartos: 4,
    m: 140,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "./assets/img/casa3.avif",
    cuartos: 6,
    m: 180,
  },
  {
    name: "Casa moderna",
    description: "Disfruta todas las comodidades y nuevas tecnologias en una casa inteligente",
    src: "./assets/img/casa4.avif",
    cuartos: 3,
    m: 215,
  },
  {
    name: "Casa Victoriana",
    description: "Desde lo clásico todo es mejor",
    src: "./assets/img/casa5.avif",
    cuartos: 4,
    m: 300,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "./assets/img/casa6.avif",
    cuartos: 5,
    m: 500,
  },
  {
    name: "Casa Chilena",
    description: "vive en una casa estilo chileno con todos sus lujos",
    src: "./assets/img/casa7.avif",
    cuartos: 7,
    m: 150,
  },];

const render = (casas) => {
    if(casas.length === 0){
        alert("Los valores no arrojaron ningún resultado, intente con nuevos valores")
        return
    }
    let listado = ""
    for (let casa of casas) {
        listado += `
            <div class=" col-12 col-md-4">
                <div class="card p-0">
                    <img src="${casa.src}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${casa.name}</h5>
                    <p class="card-text">${casa.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Piezas: ${casa.cuartos}</li>
                    <li class="list-group-item">Metros cuadrados: ${casa.m}</li>
                    </ul>
                    <div class="card-body text-center">
                    <button class="btn btn-primary">Ver más</button>
                    </div>
                </div>
            </div>`
    }
    casasContainer.innerHTML = listado;
}

render(casasList);

formulario.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const min = +minValue.value;
    const max = +maxValue.value;
    const habitacion = +piezas.value;
    let casasFiltered = [];

    if(min <= 0 || max <= 0 || habitacion <= 0){
      alert("Ingresa solo valores positivos o prueba llenando todos los campos")
    }

    for (let casa of casasList){
        if(casa.m >= min && casa.m <= max && casa.cuartos == habitacion){
            casasFiltered.push(casa)
        
        }
    }
    render(casasFiltered);
})



