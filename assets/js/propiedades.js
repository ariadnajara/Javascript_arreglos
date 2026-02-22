// =========================
// PROPIEDADES EN ALQUILER
// =========================

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    descripcion: "Hermoso departamento en pleno centro.",
    ubicacion: "Santiago Centro",
    habitaciones: 2,
    costo: 450000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
    descripcion: "Vista increíble frente al mar.",
    ubicacion: "Viña del Mar",
    habitaciones: 3,
    costo: 600000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Condominio moderno",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
    descripcion: "Zona residencial tranquila.",
    ubicacion: "La Florida",
    habitaciones: 2,
    costo: 500000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Loft industrial",
    src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    descripcion: "Estilo moderno tipo industrial.",
    ubicacion: "Providencia",
    habitaciones: 1,
    costo: 550000,
    smoke: true,
    pets: false
  }
];

// =========================
// PROPIEDADES EN VENTA
// =========================

const propiedades_venta = [
  {
    nombre: "Casa de lujo",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    descripcion: "Amplia casa en barrio exclusivo.",
    ubicacion: "Las Condes",
    habitaciones: 4,
    costo: 250000000,
    smoke: false,
    pets: true
  },
  {
    nombre: "Departamento premium",
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    descripcion: "Moderno y espacioso.",
    ubicacion: "Ñuñoa",
    habitaciones: 3,
    costo: 180000000,
    smoke: true,
    pets: true
  },
  {
    nombre: "Penthouse",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    descripcion: "Terraza panorámica.",
    ubicacion: "Vitacura",
    habitaciones: 5,
    costo: 350000000,
    smoke: false,
    pets: false
  },
  {
    nombre: "Casa familiar",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    descripcion: "Perfecta para familia grande.",
    ubicacion: "Maipú",
    habitaciones: 4,
    costo: 120000000,
    smoke: true,
    pets: true
  }
];


// ========================================
// FUNCIÓN PARA PINTAR PROPIEDADES
// ========================================

function mostrarPropiedades(arreglo, contenedorId, limite = arreglo.length) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML = "";

  for (let i = 0; i < limite; i++) {
    const propiedad = arreglo[i];

    contenedor.innerHTML += `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${propiedad.src}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${propiedad.nombre}</h5>
        <p>${propiedad.descripcion}</p>

        <p>
          <i class="fas fa-map-marker-alt text-danger"></i>
          ${propiedad.ubicacion}
        </p>

        <p>
          <i class="fas fa-bed text-secondary"></i>
          ${propiedad.habitaciones} Habitaciones
        </p>

        <p>
          <i class="fas fa-dollar-sign text-success"></i>
          $${propiedad.costo.toLocaleString()}
        </p>

        ${
          propiedad.smoke
            ? `<p class="text-success">
                 <i class="fas fa-smoking"></i> Permitido fumar
               </p>`
            : `<p class="text-danger">
                 <i class="fas fa-smoking-ban"></i> No se permite fumar
               </p>`
        }

        ${
          propiedad.pets
            ? `<p class="text-success">
                 <i class="fas fa-paw"></i> Mascotas permitidas
               </p>`
            : `<p class="text-danger">
                 <i class="fas fa-ban"></i> No se permiten mascotas
               </p>`
        }

      </div>
    </div>
  </div>
`;
      }
    }
    