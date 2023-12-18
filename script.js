// "https://api.spacexdata.com/v4/launches"
// fetch("https://api.spacexdata.com/v4/launches")
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log("Parsed response: ", data);
// })
// .catch( (err) => console.log(err));

//paso 1 API de Spacex funcion
// api nasa sigue funcionando
// ver peticiones restantes NASA DONE-
// peticion en una funcion --- PENDING
//llamar a esa funcion con un boton que muestre todos los datos en el daily - EXTRA
// 2º API NASA || API SPACEX ( por mi cuenta || ironhack)
// API NASA IMAGENES 13.25 ----- para las 14.00 tener renderizadas las imagenes o algo
//paso 2 Promise.all, console.log

const apiKey = "6MpG3Z3lsOARafqeDDhDtJyJO5aqkDJ85MWSZfK3";
const apiUrl1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const apiUrl2 = 'https://images-api.nasa.gov/search?q=moon';
// function showDaily() {
//   fetch(apiUrl1)
//     .then((response) => {
//       console.log("Todos los encabezados:", response.headers);
//       // Obtener el valor específico de un encabezado
//       const rateLimitLimit = response.headers.get("X-RateLimit-Limit");
//       const rateLimitRemaining = response.headers.get("X-RateLimit-Remaining");

//       // Imprimir los valores en la consola
//       console.log("X-RateLimit-Limit:", rateLimitLimit);
//       console.log("X-RateLimit-Remaining:", rateLimitRemaining);

//       // Verificar si la solicitud fue exitosa (código de estado 200)

//       if (!response.ok) {
//         throw new Error(`Error en la solicitud: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       // Insertar datos en el HTML
//       console.log("datos obtenidos:", data);
//       document.getElementById("daily-title").textContent = data.title;
//       document.getElementById("date").textContent = `Fecha: ${data.date}`;
//       document.getElementById("explanation").textContent = data.explanation;
//       document.getElementById("image").src = data.url;
//     })
//     .catch((error) => {
//       // Manejar errores en caso de que la solicitud no sea exitosa
//       console.error("Error al obtener los datos:", error);
//     });
// }

Promise.all([
  fetch(apiUrl1).then(response => response.json()),
  fetch(apiUrl2).then(response => response.json())
])
  .then(([apodData, imagesData]) => {
    // Manipular los datos de la respuesta de la API APOD
    console.log("Datos de APOD:", apodData);
    document.getElementById("daily-title").textContent = apodData.title;
    document.getElementById("date").textContent = `Fecha: ${apodData.date}`;
    document.getElementById("explanation").textContent = apodData.explanation;
    document.getElementById("image").src = apodData.url;

    // Manipular los datos de la respuesta de la API de imágenes
    console.log("Datos de Imágenes de la NASA:", imagesData);
    // Puedes agregar aquí la lógica para mostrar los resultados de la segunda API
  })
  .catch(error => {
    // Manejar errores en caso de que alguna de las solicitudes no sea exitosa
    console.error('Error al obtener los datos:', error);
  });