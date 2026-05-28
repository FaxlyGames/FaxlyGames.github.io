const menu =
document.getElementById("fullscreenMenu");

const hero =
document.getElementById("inicio");

/* ===================================
   ABRIR MENU
=================================== */

function abrirMenu(){

  menu.classList.add("active");
}

/* ===================================
   CERRAR MENU
=================================== */

function cerrarMenu(){

  menu.classList.remove("active");
}

/* ===================================
   CAMBIAR SECCION
=================================== */

function mostrarSeccion(id){

  /* HERO DESAPARECE */

  hero.classList.remove("active-hero");

  hero.classList.add("hidden-hero");

  /* OCULTAR TODAS */

  const sections =
  document.querySelectorAll(".hidden-section");

  sections.forEach(section => {

    section.classList.remove("active-section");
  });

  /* MOSTRAR SECCION */

  document
    .getElementById(id)
    .classList.add("active-section");

  /* CERRAR MENU */

  cerrarMenu();

  /* SCROLL ARRIBA */

  window.scrollTo({

    top:0,

    behavior:"smooth"
  });
}