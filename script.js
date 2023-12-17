// const apiKey = '6MpG3Z3lsOARafqeDDhDtJyJO5aqkDJ85MWSZfK3';
// const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Insertar datos en el HTML
    console.log(data);
    document.getElementById('dayly-title').textContent = data.title;
    document.getElementById('date').textContent = `Fecha: ${data.date}`;
    document.getElementById('explanation').textContent = data.explanation;
    document.getElementById('image').src = data.hdurl;
  })
  .catch(error => {
    // Manejar errores en caso de que la solicitud no sea exitosa
    console.error('Error al obtener los datos:', error);
  });