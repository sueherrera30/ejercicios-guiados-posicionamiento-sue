var contenedor = document.getElementById('contenedor');


//Traer el modal
var modal = document.getElementById('miModal');
modal.style.background="grey";
modal.style.display="none";




// obtener la imagen e insertarla dentro del modal y se mostrará al hacer click

var imagenConejito = document.getElementById('imagenConejito');
var imagenModal = document.getElementById('laImagenNueva');
imagenConejito.style.position="absolute";
modal.style.display="inlineBlock";

imagenConejito.addEventListener("click",mostrar);

function mostrar(){
  modal.style.display="block";
  imagenModal.src=this.src;
  imagenModal.align="left";
  modal.style.display= "inlineBlock";
  modal.style.zIndex = "1";
  modal.style.background="grey";
  modal.style.width="1500px"
  modal.style.height="1000px"


  }

//se cerrara la imagen creada atravez del tachecito

var tachecito = document.getElementsByClassName('cerrar')[0];
tachecito.addEventListener("click",cerrar);
tachecito.style.color="white";
tachecito.style.fontSize = "large";




function cerrar(){
  modal.style.display ="none";

}
