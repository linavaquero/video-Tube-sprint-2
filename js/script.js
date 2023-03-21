
import { videoTubeCharacters } from "./data.js"



const videoTube =  JSON.parse(sessionStorage.getItem("videoTube")) || videoTubeCharacters;

const containersCards = document.getElementById("containersCards")

const todos = document.getElementById("todos")
const musica = document.getElementById("musica")
const musicaNinos = document.getElementById("musicaParaNinos")
const videoJuegos = document.getElementById("videoJuegos")
const buscar = document.getElementById("form__search")

const printsVideos = (containersCards, videoTubeCharacters) => {
    console.log(videoTubeCharacters);
    containersCards.innerHTML = "";
    videoTubeCharacters.forEach(video => {
        containersCards.innerHTML += `
            <div class="cardsVideos">
            <div class="imgCards">
                <img src=${video.image} alt=${video.name} data-card="videoCards" id=${video.id}>
            </div>
            <div class="descripcion">
                <img src=${video.avatar} alt=${video.name}>
                <div class="footerCards">
                    <h4> ${video.name}</h4>
                    <span>${video.autor}</span>
                    <span>${video.vistas}</span>
                </div>
            </div>
        </div>`
    });

}
document.addEventListener("DOMContentLoaded", () => {
    printsVideos(containersCards, videoTube);
});
document.addEventListener("click", (event) => {
    const dataCardAttribute = event.target.getAttribute("data-card");
    const nuevoVideo = event.target.getAttribute("id");
    if (dataCardAttribute === "videoCards") {

        const id = event.target.getAttribute("id");
        sessionStorage.setItem("idVideos", JSON.stringify(id));
        window.location.href = "./detalles.html";
    }
    if (nuevoVideo === "nuevo"){
        window.location.href = "./formulario.html";
    }

});
todos.addEventListener('click', () => {
    printsVideos(containersCards, videoTube)
})
musica.addEventListener('click', () => {
    const videos = videoTube.filter((vd) => vd.categoria === "música")
    printsVideos(containersCards, videos)
})
musicaNinos.addEventListener('click', () => {
    const videos = videoTube.filter((vd) => vd.categoria === "música para niños")
    printsVideos(containersCards, videos)
})
videoJuegos.addEventListener('click', () => {
    const videos = videoTube.filter((vd) => vd.categoria === "video juegos")
    printsVideos(containersCards, videos)
})
buscar.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById("buscar");
    let inputValue = input.value;
  
    const videos = videoTube.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()));
   printsVideos(containersCards, videos)
   
})