

const apiKey = "6MpG3Z3lsOARafqeDDhDtJyJO5aqkDJ85MWSZfK3";
const apiUrl1 = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
const apiUrl2 = 'https://images-api.nasa.gov/search?q=moon';
const apiUrl3 = "https://api.spacexdata.com/v5/launches/"


Promise.all([
  fetch(apiUrl1).then(response => response.json()),

  fetch(apiUrl3).then(response => response.json())
])
  .then(([apodData, spacexData]) => {
    console.log("Datos de SPACEX", spacexData)

    spacexData.slice(0, 12).forEach((launch)=> {

      const successEmoji = launch.success ? "Sí 🏆" : "No ❌";
      const article = document.createRange().createContextualFragment(`
      <article>
      <div class="image-container">  
        <h2>${launch.name}</h2>
        <span> 🚀Lanzado con exito?: ${successEmoji}</span>
        <img src="${launch.links.patch.small}" alt="" />  
      </div>
    
    </article>
      `  
      )
      const main = document.querySelector(".principal")
      main.append(article)
    })
    // DOM API APOD

    console.log("Datos de APOD:", apodData);
    document.getElementById("daily-title").textContent = apodData.title;
    document.getElementById("date").textContent = `Fecha: ${apodData.date}`;
    //document.getElementById("explanation").textContent = apodData.explanation;
    document.getElementById("image").src = apodData.url;
  })
  .catch(error => {
   
    console.error('Error al obtener los datos:', error);
  });