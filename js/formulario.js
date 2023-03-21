import { videoTubeCharacters } from "./data.js";

const videoTube =  JSON.parse(sessionStorage.getItem("videoTube")) || videoTubeCharacters;



const logo = document.querySelector(".header__nav");

logo.addEventListener("click", () => {
  window.location.href = "../index.html";
});
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formChildren = Array.from(form.children);


  const arrayInput = formChildren.filter(
    (item) => item.localName === "input" || item.localName === "select"
  );

  const newCharacter = {
     name: "",
    categoria:"",
    image:"",
    video:"",
    avatar:"",
    autor:"",
    vistas:"",
  };

    for (const key in newCharacter) {
          const input = arrayInput.find((item) => item.id == key);
          newCharacter[key] = input.value; 
    }
    
    console.log(newCharacter);
    const validateCampos = validateInputs(newCharacter);
    if (validateCampos) {

        newCharacter.id = videoTube.length + 1;

        videoTube.push(newCharacter);

        sessionStorage.setItem("videoTube", JSON.stringify(videoTube));

        Swal.fire("Buen trabajo!", "El nuevo video fue creado exitosamente", "success");
        
        form.reset();
    }
    console.log(videoTube);
});
const validateInputs = (objetoData) => {
    let camposVacios = "";
    for (const key in objetoData) {

            const valueProperty = objetoData[key];
            camposVacios += !valueProperty ? `${key} `: "";
      
    }

    if (camposVacios) {
        Swal.fire("Oops!", `Hay campos vacíos: ${camposVacios}`, "error");
        return false;
    } else {
        return true;
    }
    
}