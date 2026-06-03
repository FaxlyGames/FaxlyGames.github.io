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

  hero.classList.remove("active-hero");
  hero.classList.add("hidden-hero");

  const sections =
  document.querySelectorAll(".hidden-section");

  sections.forEach(section => {
    section.classList.remove("active-section");
  });

  document
    .getElementById(id)
    .classList.add("active-section");

  cerrarMenu();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

/* ===================================
   MIEMBROS
=================================== */

function abrirMiembro(miembro){

  const modal =
  document.getElementById("memberModal");

  const content =
  document.getElementById("memberContent");

  if(miembro === "cj"){

    content.innerHTML = `
      <img src="cj.jpg">
      <h1>Cj/Cjpluzz</h1>
      <h2>Fundador y Desarrollador</h2>
      <p>
      Fundador de FaxlyGames y responsable
      de la programación, diseño y dirección
      creativa del estudio.
      </p>

      <div class="member-links">

        <a href="https://www.youtube.com/@Cjotakay" target="_blank">YouTube</a>

        <a href="https://github.com" target="_blank">Instagram</a>

        <a href="https://discord.com" target="_blank">Discord</a>

      </div>
    `;
  }

  else if(miembro === "cynarokss"){

    content.innerHTML = `
      <img src="mierdadehumano.jpg">
      <h1>Cynarokss</h1>
      <h2>Fundador y Desarrollador</h2>
      <p>
      Cofundador de FaxlyGames. Participa en la programación,
      planificación y desarrollo de los proyectos del estudio.
      </p>

      <div class="member-links">

        <a href="https://youtube.com" target="_blank">YouTube</a>

        <a href="https://github.com" target="_blank">GitHub</a>

        <a href="https://discord.com" target="_blank">Discord</a>

      </div>
    `;
  }

  else if(miembro === "erick"){

    content.innerHTML = `
      <img src="ft de erick.png">
      <h1>ErickPatino2</h1>
      <h2>Modelador 3D</h2>
      <p>
      Encargado de la creación de modelos 3D, personajes,
      objetos y recursos visuales para los videojuegos.
      </p>

      <div class="member-links">

        <a href="https://youtube.com" target="_blank">YouTube</a>

        <a href="https://github.com" target="_blank">GitHub</a>

        <a href="https://discord.com" target="_blank">Discord</a>

      </div>
    `;
  }

  else if(miembro === "stratus"){

    content.innerHTML = `
      <img src="stratus.jpg">
      <h1>Stratus</h1>
      <h2>Tester</h2>
      <p>
      Encargado de probar los videojuegos, detectar errores,
      reportar bugs y asegurar la calidad de los proyectos.
      </p>

      <div class="member-links">

        <a href="https://youtube.com" target="_blank">YouTube</a>

        <a href="https://github.com" target="_blank">GitHub</a>

        <a href="https://discord.com" target="_blank">Discord</a>

      </div>
    `;
  }

  else if(miembro === "stefan"){

    content.innerHTML = `
      <img src="stefanee.jpg">
      <h1>Stefan2022</h1>
      <h2>Ilustrador</h2>
      <p>
      Responsable de ilustraciones, arte conceptual,
      material promocional y apoyo artístico para el estudio.
      </p>

      <div class="member-links">

        <a href="https://youtube.com" target="_blank">YouTube</a>

        <a href="https://github.com" target="_blank">GitHub</a>

        <a href="https://discord.com" target="_blank">Discord</a>

      </div>
    `;
  }

  modal.classList.add("active");
}

/* ===================================
   CERRAR MIEMBRO
=================================== */

function cerrarMiembro(){

  document
  .getElementById("memberModal")
  .classList.remove("active");
}