const provincias = {
    "Distrito Nacional": ["Santo Domingo"],
    "Azua": ["Azua de Compostela", "Estebanía", "Guayabal", "Las Charcas", "Las Yayas de Viajama", "Padre Las Casas", "Peralta", "Sabana Yegua", "Tábara Arriba"],
    "Bahoruco": ["Neiba", "Galván", "Los Ríos", "Tamayo", "Villa Jaragua"],
    "Barahona": ["Barahona", "Cabral", "El Peñón", "Enriquillo", "Fundación", "Jaquimeyes", "La Ciénaga", "Las Salinas", "Paraíso", "Polo"],
    "Dajabón": ["Dajabón", "El Pino", "Loma de Cabrera", "Partido", "Restauración"],
    "Duarte": ["San Francisco de Macorís", "Arenoso", "Castillo", "Eugenio María de Hostos", "Las Guáranas", "Pimentel", "Villa Riva"],
    "Elías Piña": ["Comendador", "Bánica", "El Llano", "Hondo Valle", "Pedro Santana"],
    "El Seibo": ["Santa Cruz de El Seibo", "Miches", "Pedro Sánchez"],
    "Espaillat": ["Moca", "Cayetano Germosén", "Gaspar Hernández", "Jamao al Norte"],
    "Hato Mayor": ["Hato Mayor del Rey", "El Valle", "Sabana de la Mar"],
    "Hermanas Mirabal": ["Salcedo", "Tenares", "Villa Tapia"],
    "Independencia": ["Jimaní", "Cristóbal", "Duvergé", "La Descubierta", "Mella", "Postrer Río"],
    "La Altagracia": ["Higüey", "Bávaro", "Miches"],
    "La Romana": ["La Romana", "Guaymate", "Villa Hermosa"],
    "La Vega": ["Concepción de La Vega", "Bonao", "Jima Abajo", "Mamá Tingó"],
    "María Trinidad Sánchez": ["Nagua", "Arenoso", "El Factor", "Río San Juan"],
    "Monseñor Nouel": ["Bonao", "Maimón", "Piedra Blanca"],
    "Monte Cristi": ["Monte Cristi", "Castañuela", "Guayubín", "Las Matas de Santa Cruz", "Pepillo Salcedo", "Villa Vásquez"],
    "Monte Plata": ["Monte Plata", "Bayaguana", "Don Juan", "Peralvillo", "Sabana Grande de Boyá", "Yamasá"],
    "Pedernales": ["Pedernales", "Oviedo", "Bahía de las Águilas"],
}  

const zipCodes = {
    Azua: "71000",
    Bahoruco: "81000",
    Barahona: "81000",
    Dajabón: "63000",
    "Distrito Nacional": "10100",
    Duarte: "31000",
    "El Seibo": "24000",
    Espaillat: "57000",
    "Hato Mayor": "25000",
    "Hermanas Mirabal": "33000",
    Independencia: "75000",
    "La Altagracia": "23000",
    "La Romana": "22000",
    "La Vega": "41000",
    "María Trinidad Sánchez": "33000",
    "Monseñor Nouel": "41000",
    "Monte Cristi": "",
}
  
  
  


const provinciaSelect = document.getElementById('provincia');
const municipiosSelect = document.getElementById('municipios');
const zip = document.getElementById('zip');

provinciaSelect.addEventListener('change', function() {
  const provincia = provinciaSelect.value;
  if (provincia) {
    const municipios = provincias[provincia];
    const options = municipios.map(municipio => `<option>${municipio}</option>`).join('');
    municipiosSelect.innerHTML = options;
    municipiosSelect.disabled = false;

    const zip_code = zipCodes[provincia];
    console.log(zip_code);
    zip.innerHTML =  `<option>${zip_code}</option>`;
    zip.disabled = false;
    

  }if(provincia){
    const zip_code = zipCodes[provincia];
    const options = zip_code.map(zipC => `<option>${zipC}</option>`).join('');
    zip.innerHTML = options;
    zip.disabled = false

  } else {
    municipiosSelect.innerHTML = '<option value="">--</option>';
    municipiosSelect.disabled = true;
    zip.innerHTML = '<option value="">--</option>';
    zip.disabled = true
  }


});

const form = document.querySelector('form');
const status = document.querySelector('.status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  });

  if (response.ok) {
    form.reset();
    status.textContent = '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.';
    status.classList.add('success');
  } else {
    status.textContent = 'Ocurrió un error al enviar el formulario. Inténtalo de nuevo más tarde.';
    status.classList.add('error');
  }
});
