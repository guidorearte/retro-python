
import { enviarMensaje, recibirMensaje } from "./bus.js";

class RetroEjemplos extends HTMLElement {

  connectedCallback() {
    this.crearHTML();
    this.conectarEventos();
  }

  crearHTML() {
    this.innerHTML = `

      <button id="abrir-ejemplos">
        <div class="icono">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
          </svg>
        </div>

        Ver ejemplos
      </button>

      <dialog>

        <div class="contenedor-de-ejemplos">

        <form method="dialog">
          <button>

            <div class="icono">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </div>

            Volver al proyecto
          </button>
        </form>
      </dialog>

    `;
  }

  conectarEventos() {
    const boton = this.querySelector("#abrir-ejemplos");
    const dialogo = this.querySelector("dialog");

    boton.addEventListener("click", () => {
      dialogo.showModal();
    });
  }

  disconnectedCallback() {
  }
}

export default RetroEjemplos;


