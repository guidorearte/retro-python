import { enviarMensaje, recibirMensaje } from "./bus.js";

class RunButton extends HTMLElement {

  connectedCallback() {
    this.crearHTML();
    this.conectarEventos();
  }

  crearHTML() {
    this.innerHTML = `
      <button id="ejecutar">

        <div id="icono-ejecutar" class="icono">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
        </div>

        <div id="icono-detener" class="icono dn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
          </svg>
        </div>

        Ejecutar

      </button>
    `;
  }

  conectarEventos() {
    const ejecutar = document.querySelector("#ejecutar");
    const iconoEjecutar = document.querySelector("#icono-ejecutar");
    const iconoDetener = document.querySelector("#icono-detener");

    ejecutar.addEventListener("click", () => {
      enviarMensaje(this, "señal-comenzar-a-ejecutar");
      iconoEjecutar.classList.add("dn");
      iconoDetener.classList.remove("dn");
    });

    recibirMensaje(this, "señal-detener-la-ejecución", () => {
      iconoEjecutar.classList.remove("dn");
      iconoDetener.classList.add("dn");
    });

  }

}

export default RunButton;
