import { videoTubeCharacters } from "./data.js"

const reproducion = document.getElementById('reproducion')
const videoSugerido = document.getElementById('videoSugerido')

const videoTube =  JSON.parse(sessionStorage.getItem("videoTube")) || videoTubeCharacters;
const reproductorVideos = (reproducion, video) => {
    reproducion.innerHTML = `
            <section id=${ video.id}>
            <iframe id="videoReproduciendo" src=${video.video} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen>
            </iframe>
            <div class="descripcion">
                <img src=${video.image}
                    alt=${video.name}>
                <div class="detalle">
                    <h4>${video.name}</h4>
                    <span>${video.vistas}</span>
                </div>
            </div>
            </section>`;
}
const videoSugeridos= (videos,videoSugerido) =>{
    videoSugerido.innerHTML = "" 
   videos.forEach(video => {
        videoSugerido.innerHTML +=`
        <div class="descripcionSugerencia">
        <img src=${video.image} alt=${video.name}>
        <div class="detalle">
            <h5>${video.name}</h5>
            <span>${video.autor}</span>
            <span>${video.vistas}</span>
        </div>
    </div>
        `
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const idVideos = JSON.parse(sessionStorage.getItem("idVideos"))
    const id = Number(idVideos)
    const video = videoTube.find((vd) => vd.id === id)
    const videos = videoTube.filter((vd) => vd.categoria === video.categoria)
    reproductorVideos(reproducion, video);
    videoSugeridos (videos,videoSugerido)
});
const logo = document.querySelector(".header__nav");

logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});